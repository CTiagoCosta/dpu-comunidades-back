import prismaClient from "../../../../prisma";
import { PrimeiroAtendimentoRepository } from "../../repositories/PrimeiroAtendimentoRepository";
import { NavigationService } from "../../services/NavigationService";
import { ProgressCalculator } from "../../services/ProgressCalculator";
import { HistoricoProgressoRepository } from "../../repositories/HistoricoProgressoRepository";
import {
  SalvarViabilidadeRequest,
  SalvarViabilidadeResponse,
} from "./SalvarViabilidadeDtos";

export class SalvarViabilidadeUseCase {
  constructor(
    private primeiroAtendimentoRepo: PrimeiroAtendimentoRepository,
    private navigationService: NavigationService,
    private progressCalculator: ProgressCalculator,
    private historicoRepo: HistoricoProgressoRepository
  ) {}

  async execute(
    request: SalvarViabilidadeRequest
  ): Promise<SalvarViabilidadeResponse> {
    const {
      primeiroAtendimentoId,
      operadorId,
      viabilidadeDemanda,
      fundamentacaoViabilidade,
      observacoes,
      competenciaJudicial,
      dataInicioBeneficio,
      parcelasVencidas,
      valorCausa,
      processosAndamento,
      numeroProcesso,
      concluirEtapa = true,
    } = request;

    // Buscar atendimento
    const atendimento = await this.primeiroAtendimentoRepo.findById(
      primeiroAtendimentoId
    );

    if (!atendimento) {
      throw new Error("Primeiro atendimento não encontrado");
    }

    // Verificar autorização
    if (atendimento.operadorId !== operadorId) {
      throw new Error(
        "Operador não autorizado a modificar este atendimento"
      );
    }

    // Determinar próxima etapa
    const proximaEtapa = concluirEtapa
      ? await this.navigationService.determinarProximaEtapa(
          "VIABILIDADE_DEMANDA",
          {}
        )
      : atendimento.etapaAtual;

    // Calcular percentual
    const percentual = this.progressCalculator.calcular({
      ...atendimento,
      etapaViabilidadeConcluida: concluirEtapa,
    });

    // Buscar ou criar competência judicial se fornecida
    let competenciaJudicialId: number | null = null;
    if (competenciaJudicial) {
      const competencia = await prismaClient.competenciaJudicial.findFirst({
        where: {
          descricao: {
            contains: competenciaJudicial,
            mode: 'insensitive'
          }
        }
      });
      competenciaJudicialId = competencia?.id || null;
    }

    // Preparar dados de atualização
    const updateData: any = {
      etapaViabilidadeConcluida: concluirEtapa,
      etapaViabilidadeTimestamp: concluirEtapa ? new Date() : undefined,
      etapaAtual: proximaEtapa,
      percentualConclusao: percentual,
    };

    // Adicionar campos opcionais se fornecidos
    if (viabilidadeDemanda) updateData.viabilidadeDemanda = viabilidadeDemanda;
    if (fundamentacaoViabilidade) updateData.fundamentacaoViabilidade = fundamentacaoViabilidade;
    if (observacoes) updateData.observacoesViabilidade = observacoes;
    if (competenciaJudicialId) updateData.competenciaJudicialId = competenciaJudicialId;
    if (dataInicioBeneficio) updateData.dataInicioBeneficio = new Date(dataInicioBeneficio);
    if (parcelasVencidas) updateData.parcelasVencidas = parcelasVencidas;
    if (valorCausa) updateData.valorCausa = parseFloat(valorCausa.replace(/[^0-9.,]/g, '').replace(',', '.'));
    
    // Mapear processosAndamento para o enum correto
    if (processosAndamento) {
      const processosMap: Record<string, string> = {
        "SIM": "SIM_MAS_IGUAL",
        "NÃO": "NAO",
        "SIM_MAS_DIFERENTE": "SIM_MAS_DIFERENTE",
        "SIM_MAS_IGUAL": "SIM_MAS_IGUAL",
        "NAO": "NAO"
      };
      const valor = processosMap[processosAndamento] || processosAndamento;
      updateData.processosAndamento = valor;
    }
    
    if (numeroProcesso) updateData.numeroProcesso = numeroProcesso;

    // Atualizar dados em transação
    const atendimentoAtualizado = await prismaClient.$transaction(
      async (tx) => {
        // Atualizar PrimeiroAtendimento
        const updated = await tx.primeiroAtendimento.update({
          where: { id: primeiroAtendimentoId },
          data: updateData,
        });

        // Registrar histórico
        await tx.historicoProgressoPrimeiroAtendimento.create({
          data: {
            primeiroAtendimentoId,
            etapa: "VIABILIDADE_DEMANDA",
            acao: concluirEtapa ? "ETAPA_CONCLUIDA" : "ETAPA_SALVA",
            dadosAlterados: JSON.stringify({
              viabilidadeDemanda,
              fundamentacaoViabilidade,
              observacoes,
              competenciaJudicial,
              dataInicioBeneficio,
              parcelasVencidas,
              valorCausa,
              processosAndamento,
              numeroProcesso,
            }),
          },
        });

        return updated;
      }
    );

    const proximaEtapaRetorno = concluirEtapa ? proximaEtapa : null;

    return {
      id: atendimentoAtualizado.id,
      status: atendimentoAtualizado.status,
      etapaAtual: atendimentoAtualizado.etapaAtual,
      proximaEtapa: proximaEtapaRetorno,
      percentualConclusao: atendimentoAtualizado.percentualConclusao,
      etapaConcluida: concluirEtapa,
    };
  }
}

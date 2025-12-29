import prismaClient from "../../../../prisma";
import { PrimeiroAtendimentoRepository } from "../../repositories/PrimeiroAtendimentoRepository";
import { NavigationService } from "../../services/NavigationService";
import { ProgressCalculator } from "../../services/ProgressCalculator";
import { HistoricoProgressoRepository } from "../../repositories/HistoricoProgressoRepository";
import {
  SalvarAnaliseRendaRequest,
  SalvarAnaliseRendaResponse,
} from "./SalvarAnaliseRendaDtos";

export class SalvarAnaliseRendaUseCase {
  constructor(
    private primeiroAtendimentoRepo: PrimeiroAtendimentoRepository,
    private navigationService: NavigationService,
    private progressCalculator: ProgressCalculator,
    private historicoRepo: HistoricoProgressoRepository
  ) {}

  async execute(
    request: SalvarAnaliseRendaRequest
  ): Promise<SalvarAnaliseRendaResponse> {
    const {
      primeiroAtendimentoId,
      operadorId,
      possuiRenda,
      valorRendaFamiliar,
      quantidadePessoas,
      rendaPerCapita,
      observacoes,
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

    // Verificar se etapas anteriores foram concluídas
    if (!atendimento.etapaComplementoDadosConcluida) {
      throw new Error(
        "Etapa de Complemento de Dados deve ser concluída antes"
      );
    }

    // Se estava suspenso, remove a suspensão ao retomar
    const dadosAtualizacao: any = {};
    if (atendimento.suspensoPeloOperador) {
      dadosAtualizacao.suspensoPeloOperador = false;
      dadosAtualizacao.motivoSuspensao = null;
      dadosAtualizacao.dataSuspensao = null;
    }

    // Determinar próxima etapa
    const proximaEtapa = concluirEtapa
      ? await this.navigationService.determinarProximaEtapa("ANALISE_RENDA", {})
      : atendimento.etapaAtual;

    // Calcular percentual
    const percentual = this.progressCalculator.calcular({
      ...atendimento,
      etapaAnaliseRendaConcluida: concluirEtapa,
    });

    // Atualizar dados em transação
    const atendimentoAtualizado = await prismaClient.$transaction(
      async (tx) => {
        // Criar ou atualizar dados da Análise de Renda
        const analiseRenda = await tx.analiseRenda.upsert({
          where: { primeiroAtendimentoId },
          create: {
            primeiroAtendimentoId,
            possuiRenda,
            valorRendaFamiliar: valorRendaFamiliar
              ? parseFloat(valorRendaFamiliar.toString())
              : null,
            quantidadePessoas,
            rendaPerCapita: rendaPerCapita
              ? parseFloat(rendaPerCapita.toString())
              : null,
            observacoes,
          },
          update: {
            possuiRenda,
            valorRendaFamiliar: valorRendaFamiliar
              ? parseFloat(valorRendaFamiliar.toString())
              : null,
            quantidadePessoas,
            rendaPerCapita: rendaPerCapita
              ? parseFloat(rendaPerCapita.toString())
              : null,
            observacoes,
          },
        });

        // Atualizar PrimeiroAtendimento
        const updated = await tx.primeiroAtendimento.update({
          where: { id: primeiroAtendimentoId },
          data: {
            analiseRendaId: analiseRenda.id,
            etapaAnaliseRendaConcluida: concluirEtapa,
            etapaAnaliseRendaTimestamp: concluirEtapa
              ? new Date()
              : undefined,
            etapaAtual: proximaEtapa,
            percentualConclusao: percentual,
            ...dadosAtualizacao,
          },
        });

        // Registrar histórico
        await tx.historicoProgressoPrimeiroAtendimento.create({
          data: {
            primeiroAtendimentoId,
            etapa: "ANALISE_RENDA",
            acao: concluirEtapa ? "ETAPA_CONCLUIDA" : "ETAPA_SALVA",
            dadosAlterados: JSON.stringify({
              possuiRenda,
              valorRendaFamiliar,
              quantidadePessoas,
              rendaPerCapita,
              observacoes,
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

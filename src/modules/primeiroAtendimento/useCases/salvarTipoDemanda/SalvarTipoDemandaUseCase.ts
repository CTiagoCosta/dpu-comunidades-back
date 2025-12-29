import prismaClient from "../../../../prisma";
import { PrimeiroAtendimentoRepository } from "../../repositories/PrimeiroAtendimentoRepository";
import { NavigationService } from "../../services/NavigationService";
import { ProgressCalculator } from "../../services/ProgressCalculator";
import { HistoricoProgressoRepository } from "../../repositories/HistoricoProgressoRepository";
import {
  SalvarTipoDemandaRequest,
  SalvarTipoDemandaResponse,
} from "./SalvarTipoDemandaDtos";

export class SalvarTipoDemandaUseCase {
  constructor(
    private primeiroAtendimentoRepo: PrimeiroAtendimentoRepository,
    private navigationService: NavigationService,
    private progressCalculator: ProgressCalculator,
    private historicoRepo: HistoricoProgressoRepository
  ) {}

  async execute(
    request: SalvarTipoDemandaRequest
  ): Promise<SalvarTipoDemandaResponse> {
    const {
      primeiroAtendimentoId,
      operadorId,
      tipoDemandaPrevidenciariaId,
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

    // Buscar tipo de demanda para validação
    const tipoDemanda = await prismaClient.tipoDemandaPrevidenciaria.findUnique(
      {
        where: { id: tipoDemandaPrevidenciariaId },
      }
    );

    if (!tipoDemanda) {
      throw new Error("Tipo de demanda previdenciária não encontrado");
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
      ? await this.navigationService.determinarProximaEtapa(
          "TIPO_DEMANDA_PREVIDENCIARIA",
          { tipoDemandaPrevidenciariaId }
        )
      : atendimento.etapaAtual;

    // Calcular percentual
    const percentual = this.progressCalculator.calcular({
      ...atendimento,
      etapaTipoDemandaConcluida: concluirEtapa,
    });

    // Atualizar dados em transação
    const atendimentoAtualizado = await prismaClient.$transaction(
      async (tx) => {
        // Atualizar PrimeiroAtendimento
        const updated = await tx.primeiroAtendimento.update({
          where: { id: primeiroAtendimentoId },
          data: {
            tipoDemandaPrevidenciariaId,
            etapaTipoDemandaConcluida: concluirEtapa,
            etapaTipoDemandaTimestamp: concluirEtapa ? new Date() : undefined,
            etapaAtual: proximaEtapa,
            percentualConclusao: percentual,
            ...dadosAtualizacao,
          },
        });

        // Registrar histórico
        await tx.historicoProgressoPrimeiroAtendimento.create({
          data: {
            primeiroAtendimentoId,
            etapa: "TIPO_DEMANDA_PREVIDENCIARIA",
            acao: concluirEtapa ? "ETAPA_CONCLUIDA" : "ETAPA_SALVA",
            dadosAlterados: JSON.stringify({
              tipoDemandaPrevidenciariaId,
              descricaoTipoDemanda: tipoDemanda.descricao,
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
      tipoBeneficioSelecionado: tipoDemanda.descricao,
    };
  }
}

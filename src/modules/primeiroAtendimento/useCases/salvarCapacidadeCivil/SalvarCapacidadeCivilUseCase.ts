import { PrimeiroAtendimentoRepository } from "../../repositories/PrimeiroAtendimentoRepository";
import { NavigationService } from "../../services/NavigationService";
import { ProgressCalculator } from "../../services/ProgressCalculator";
import { HistoricoProgressoRepository } from "../../repositories/HistoricoProgressoRepository";
import prismaClient from "../../../../prisma";
import {
  SalvarCapacidadeCivilRequest,
  SalvarCapacidadeCivilResponse,
} from "./SalvarCapacidadeCivilDtos";

export class SalvarCapacidadeCivilUseCase {
  constructor(
    private primeiroAtendimentoRepo: PrimeiroAtendimentoRepository,
    private navigationService: NavigationService,
    private progressCalculator: ProgressCalculator,
    private historicoRepo: HistoricoProgressoRepository
  ) {}

  async execute(
    request: SalvarCapacidadeCivilRequest
  ): Promise<SalvarCapacidadeCivilResponse> {
    const { primeiroAtendimentoId, capacidadeCivil, concluirEtapa } = request;

    // 1. Buscar atendimento existente
    const atendimento = await this.primeiroAtendimentoRepo.findById(
      primeiroAtendimentoId
    );

    if (!atendimento) {
      throw new Error("Primeiro Atendimento não encontrado");
    }

    // 2. Validar estado atual
    if (atendimento.status === "CONCLUIDO") {
      throw new Error("Atendimento já foi concluído");
    }

    if (atendimento.status === "CANCELADO") {
      throw new Error("Atendimento foi cancelado");
    }

    // 3. Validar dados
    if (typeof capacidadeCivil !== "boolean") {
      throw new Error("capacidadeCivil é obrigatório e deve ser boolean");
    }

    // 4. Preparar dados para atualização
    const dadosAtualizacao: any = {
      capacidadeCivil,
    };

    // 4.1. Se estava suspenso, remove a suspensão ao retomar
    if (atendimento.suspensoPeloOperador) {
      dadosAtualizacao.suspensoPeloOperador = false;
      dadosAtualizacao.motivoSuspensao = null;
      dadosAtualizacao.dataSuspensao = null;
    }

    // 5. Se está concluindo a etapa
    if (concluirEtapa) {
      dadosAtualizacao.etapaCapacidadeCivilConcluida = true;
      dadosAtualizacao.etapaCapacidadeCivilTimestamp = new Date();

      // Determinar próxima etapa
      const proximaEtapa = await this.navigationService.determinarProximaEtapa(
        "CAPACIDADE_CIVIL",
        { capacidadeCivil }
      );

      dadosAtualizacao.etapaAtual = proximaEtapa;

      // Calcular percentual de conclusão
      const percentual = this.progressCalculator.calcular({
        ...atendimento,
        ...dadosAtualizacao,
      });

      dadosAtualizacao.percentualConclusao = percentual;
    }

    // 6. Atualizar no banco (transação)
    const atendimentoAtualizado = await prismaClient.$transaction(
      async (tx) => {
        // Atualiza o primeiro atendimento
        const updated = await tx.primeiroAtendimento.update({
          where: { id: primeiroAtendimentoId },
          data: dadosAtualizacao,
          include: {
            fila: true,
            operador: {
              select: { id: true, nome: true, email: true },
            },
          },
        });

        // Registra histórico de progresso
        await tx.historicoProgressoPrimeiroAtendimento.create({
          data: {
            primeiroAtendimentoId,
            etapa: "CAPACIDADE_CIVIL",
            acao: concluirEtapa ? "ETAPA_CONCLUIDA" : "ETAPA_SALVA",
            dadosAlterados: {
              capacidadeCivil,
            },
          },
        });

        return updated;
      }
    );

    // 7. Retornar resposta
    return {
      id: atendimentoAtualizado.id,
      status: atendimentoAtualizado.status,
      etapaAtual: atendimentoAtualizado.etapaAtual,
      percentualConclusao: atendimentoAtualizado.percentualConclusao,
      capacidadeCivil: atendimentoAtualizado.capacidadeCivil,
      etapaCapacidadeCivilConcluida:
        atendimentoAtualizado.etapaCapacidadeCivilConcluida,
      etapaCapacidadeCivilTimestamp:
        atendimentoAtualizado.etapaCapacidadeCivilTimestamp,
      dataUltimaAtualizacao: atendimentoAtualizado.dataUltimaAtualizacao,
    };
  }
}

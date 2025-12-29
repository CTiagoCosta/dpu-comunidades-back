import prismaClient from "../../../../prisma";
import { PrimeiroAtendimentoRepository } from "../../repositories/PrimeiroAtendimentoRepository";
import { HistoricoProgressoRepository } from "../../repositories/HistoricoProgressoRepository";
import { SocketService } from "../../../../infra/SocketService";
import {
  RetomarAtendimentoRequest,
  RetomarAtendimentoResponse,
} from "./RetomarAtendimentoDtos";

export class RetomarAtendimentoUseCase {
  constructor(
    private primeiroAtendimentoRepo: PrimeiroAtendimentoRepository,
    private historicoRepo: HistoricoProgressoRepository
  ) {}

  async execute(
    request: RetomarAtendimentoRequest
  ): Promise<RetomarAtendimentoResponse> {
    const { primeiroAtendimentoId } = request;

    // Buscar atendimento
    const atendimento = await this.primeiroAtendimentoRepo.findById(
      primeiroAtendimentoId
    );

    if (!atendimento) {
      throw new Error("Primeiro atendimento não encontrado");
    }

    // Verificar se está suspenso
    if (!atendimento.suspensoPeloOperador) {
      // Se não está suspenso, apenas retorna os dados
      return {
        id: atendimento.id,
        filaId: atendimento.filaId,
        operadorId: atendimento.operadorId,
        status: atendimento.status,
        etapaAtual: atendimento.etapaAtual,
        suspensoPeloOperador: false,
      };
    }

    // Retomar atendimento (remover suspensão)
    const atendimentoRetomado = await prismaClient.$transaction(async (tx) => {
      const updated = await tx.primeiroAtendimento.update({
        where: { id: primeiroAtendimentoId },
        data: {
          suspensoPeloOperador: false,
          motivoSuspensao: null,
          dataSuspensao: null,
        },
      });

      // Criar registro de histórico
      await tx.historicoProgressoPrimeiroAtendimento.create({
        data: {
          primeiroAtendimentoId,
          etapa: atendimento.etapaAtual,
          acao: "ATENDIMENTO_RETOMADO",
          dadosAlterados: JSON.stringify({
            acao: "Atendimento retomado pelo operador",
            etapaRetomada: atendimento.etapaAtual,
          }),
        },
      });

      return updated;
    });

    // Notificar atualização via WebSocket
    await SocketService.notifyQueueUpdate();

    return {
      id: atendimentoRetomado.id,
      filaId: atendimentoRetomado.filaId,
      operadorId: atendimentoRetomado.operadorId,
      status: atendimentoRetomado.status,
      etapaAtual: atendimentoRetomado.etapaAtual,
      suspensoPeloOperador: atendimentoRetomado.suspensoPeloOperador,
    };
  }
}

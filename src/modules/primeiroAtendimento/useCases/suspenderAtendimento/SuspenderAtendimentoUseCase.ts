import prismaClient from "../../../../prisma";
import { PrimeiroAtendimentoRepository } from "../../repositories/PrimeiroAtendimentoRepository";
import { HistoricoProgressoRepository } from "../../repositories/HistoricoProgressoRepository";
import { SocketService } from "../../../../infra/SocketService";
import {
  SuspenderAtendimentoRequest,
  SuspenderAtendimentoResponse,
} from "./SuspenderAtendimentoDtos";

export class SuspenderAtendimentoUseCase {
  constructor(
    private primeiroAtendimentoRepo: PrimeiroAtendimentoRepository,
    private historicoRepo: HistoricoProgressoRepository
  ) {}

  async execute(
    request: SuspenderAtendimentoRequest
  ): Promise<SuspenderAtendimentoResponse> {
    const { primeiroAtendimentoId, motivoSuspensao } = request;

    // Buscar atendimento
    const atendimento = await this.primeiroAtendimentoRepo.findById(
      primeiroAtendimentoId
    );

    if (!atendimento) {
      throw new Error("Primeiro atendimento não encontrado");
    }

    // Verificar se já está concluído
    if (atendimento.status === "CONCLUIDO") {
      throw new Error("Atendimento já foi concluído e não pode ser suspenso");
    }

    // Verificar se já está cancelado
    if (atendimento.status === "CANCELADO") {
      throw new Error("Atendimento cancelado não pode ser suspenso");
    }

    // Verificar se já está suspenso
    if (atendimento.suspensoPeloOperador) {
      throw new Error("Atendimento já está suspenso");
    }

    // Suspender atendimento
    const atendimentoSuspenso = await prismaClient.$transaction(async (tx) => {
      const updated = await tx.primeiroAtendimento.update({
        where: { id: primeiroAtendimentoId },
        data: {
          suspensoPeloOperador: true,
          motivoSuspensao: motivoSuspensao || null,
          dataSuspensao: new Date(),
        },
      });

      // Criar registro de histórico
      await tx.historicoProgressoPrimeiroAtendimento.create({
        data: {
          primeiroAtendimentoId,
          etapa: atendimento.etapaAtual,
          acao: "ETAPA_SALVA",
          dadosAlterados: JSON.stringify({
            acao: "Atendimento suspenso pelo operador",
            motivoSuspensao: motivoSuspensao || "Não informado",
            etapaSalva: atendimento.etapaAtual,
          }),
        },
      });

      return updated;
    });

    // Notificar atualização via WebSocket
    await SocketService.notifyQueueUpdate();

    return {
      id: atendimentoSuspenso.id,
      filaId: atendimentoSuspenso.filaId,
      operadorId: atendimentoSuspenso.operadorId,
      status: atendimentoSuspenso.status,
      etapaAtual: atendimentoSuspenso.etapaAtual,
      suspensoPeloOperador: atendimentoSuspenso.suspensoPeloOperador,
      motivoSuspensao: atendimentoSuspenso.motivoSuspensao || undefined,
      dataSuspensao: atendimentoSuspenso.dataSuspensao!,
    };
  }
}

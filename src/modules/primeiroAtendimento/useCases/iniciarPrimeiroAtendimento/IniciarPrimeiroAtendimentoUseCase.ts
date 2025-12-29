import { PrimeiroAtendimentoRepository } from "../../repositories/PrimeiroAtendimentoRepository";
import { HistoricoProgressoRepository } from "../../repositories/HistoricoProgressoRepository";
import {
  IniciarPrimeiroAtendimentoRequest,
  IniciarPrimeiroAtendimentoResponse,
} from "./IniciarPrimeiroAtendimentoDtos";
import prismaClient from "../../../../prisma";
import { SocketService } from "../../../../infra/SocketService";

export class IniciarPrimeiroAtendimentoUseCase {
  constructor(
    private primeiroAtendimentoRepo: PrimeiroAtendimentoRepository,
    private historicoRepo: HistoricoProgressoRepository
  ) {}

  async execute(
    request: IniciarPrimeiroAtendimentoRequest
  ): Promise<IniciarPrimeiroAtendimentoResponse> {
    const { filaId, operadorId } = request;

    // 1. Verificar se já existe um primeiro atendimento para esta fila
    const existente = await this.primeiroAtendimentoRepo.findByFilaId(filaId);

    if (existente) {
      // Se já existe, retorna o existente (para retomar)
      return {
        id: existente.id,
        filaId: existente.filaId,
        operadorId: existente.operadorId,
        status: existente.status,
        etapaAtual: existente.etapaAtual,
        percentualConclusao: existente.percentualConclusao,
        dataInicio: existente.dataInicio,
      };
    }

    // 2. Verificar se a fila existe
    const fila = await prismaClient.filaAtendimento.findUnique({
      where: { id: filaId },
    });

    if (!fila) {
      throw new Error("Fila de atendimento não encontrada");
    }

    // 3. Atualizar status da fila para EM_ATENDIMENTO
    await prismaClient.filaAtendimento.update({
      where: { id: filaId },
      data: {
        status: "EM_ATENDIMENTO",
        operadorAtendimentoId: operadorId,
        dataInicio: new Date(),
      },
    });

    // 4. Criar novo primeiro atendimento
    const novoAtendimento = await this.primeiroAtendimentoRepo.create({
      fila: {
        connect: { id: filaId },
      },
      operador: {
        connect: { id: operadorId },
      },
      status: "EM_ANDAMENTO",
      etapaAtual: "CAPACIDADE_CIVIL",
      percentualConclusao: 0,
    });

    // 5. Criar registro de histórico
    await this.historicoRepo.create({
      primeiroAtendimento: {
        connect: { id: novoAtendimento.id },
      },
      etapa: "CAPACIDADE_CIVIL",
      acao: "ETAPA_INICIADA",
      dadosAlterados: {
        acao: "Primeiro atendimento iniciado",
      },
    });

    // 6. Notificar WebSocket sobre atualização da fila
    await SocketService.notifyQueueUpdate();

    // 7. Retornar resposta
    return {
      id: novoAtendimento.id,
      filaId: novoAtendimento.filaId,
      operadorId: novoAtendimento.operadorId,
      status: novoAtendimento.status,
      etapaAtual: novoAtendimento.etapaAtual,
      percentualConclusao: novoAtendimento.percentualConclusao,
      dataInicio: novoAtendimento.dataInicio,
    };
  }
}

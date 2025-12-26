import { PrismaClient } from "../../../../generated/prisma";
import {
  FinalizarAtendimentoRequestDto,
  FinalizarAtendimentoResponseDto,
} from "./FinalizarAtendimentoDtos";

export class FinalizarAtendimentoUseCase {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async execute(dto: FinalizarAtendimentoRequestDto): Promise<FinalizarAtendimentoResponseDto> {
    const { atendimentoId } = dto;

    // Tenta buscar o atendimento
    let atendimento = await this.prisma.atendimento.findUnique({
      where: { id: atendimentoId },
    });

    let filaId: string | null = null;

    if (atendimento) {
      filaId = atendimento.filaId;
    } else {
      // Se não encontrou atendimento, tenta buscar diretamente pela fila
      const fila = await this.prisma.filaAtendimento.findUnique({
        where: { id: atendimentoId },
      });

      if (fila) {
        filaId = fila.id;
      }
    }

    if (!filaId) {
      throw new Error("Fila de atendimento não encontrada");
    }

    // Atualiza o status da fila para ATENDIDO
    const filaAtualizada = await this.prisma.filaAtendimento.update({
      where: { id: filaId },
      data: {
        status: "ATENDIDO",
        dataFim: new Date(),
      },
    });

    return {
      id: filaAtualizada.id,
      status: filaAtualizada.status,
      dataFim: filaAtualizada.dataFim!,
    };
  }
}

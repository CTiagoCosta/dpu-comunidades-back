import prismaClient from "../../../prisma";
import { HistoricoProgressoPrimeiroAtendimento, Prisma } from "../../../generated/prisma";

export class HistoricoProgressoRepository {
  async create(
    data: Prisma.HistoricoProgressoPrimeiroAtendimentoCreateInput
  ): Promise<HistoricoProgressoPrimeiroAtendimento> {
    return await prismaClient.historicoProgressoPrimeiroAtendimento.create({
      data,
    });
  }

  async findByPrimeiroAtendimentoId(
    primeiroAtendimentoId: string
  ): Promise<HistoricoProgressoPrimeiroAtendimento[]> {
    return await prismaClient.historicoProgressoPrimeiroAtendimento.findMany({
      where: { primeiroAtendimentoId },
      orderBy: { timestamp: 'desc' },
    });
  }
}

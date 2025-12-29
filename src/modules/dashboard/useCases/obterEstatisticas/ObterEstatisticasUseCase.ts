import prismaClient from "../../../../prisma";
import { ObterEstatisticasResponse } from "./ObterEstatisticasDtos";

export class ObterEstatisticasUseCase {
  async execute(): Promise<ObterEstatisticasResponse> {
    // Total de atendimentos (primeiro atendimento)
    const totalAtendimentos = await prismaClient.primeiroAtendimento.count();

    // Em andamento (status EM_ANDAMENTO)
    const emAndamento = await prismaClient.primeiroAtendimento.count({
      where: {
        status: "EM_ANDAMENTO"
      }
    });

    // Concluídos (status CONCLUIDO)
    const concluidos = await prismaClient.primeiroAtendimento.count({
      where: {
        status: "CONCLUIDO"
      }
    });

    // Total de operadores (usuários aprovados)
    const operadores = await prismaClient.user.count({
      where: {
        aprovado: true
      }
    });

    return {
      totalAtendimentos,
      emAndamento,
      concluidos,
      operadores
    };
  }
}

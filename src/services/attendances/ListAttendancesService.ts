
import prismaClient from "../../prisma";

class ListAttendancesService {
  async execute() {
    const atendimentos = await prismaClient.atendimento.findMany({
      orderBy: { dataCriacao: 'desc' }
    });
    return atendimentos;
  }
}

export { ListAttendancesService };

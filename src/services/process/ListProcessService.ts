
import prismaClient from "../../prisma";

class ListProcessService {
  async execute() {
    const processos = await prismaClient.processo.findMany({
      orderBy: { dataAtualizacao: 'desc' }
    });
    return processos;
  }
}

export { ListProcessService };


import prismaClient from "../../prisma";

class ListQueueService {
  async execute() {
    const filas = await prismaClient.filaAtendimento.findMany({
      orderBy: {
        dataEntrada: 'desc'
      },
      select: {
        nomeCompleto: true,
        nomeSocial: true,
        cpf: true,
        telefone: true,
        isPrioridade: true,
        status: true,
        dataEntrada: true
      }
    });

    return filas;
  }
}

export { ListQueueService };


import prismaClient from "../../prisma";

class ListCompletedFormService {
  async execute() {
    const formularios = await prismaClient.formularioPreenchido.findMany({
      orderBy: { dataCriacao: 'desc' },
      include: {
        atendimento: {
          select: {
            id: true,
            nomeCompleto: true,
            cpf: true
          }
        }
      }
    });

    return formularios;
  }
}

export { ListCompletedFormService };

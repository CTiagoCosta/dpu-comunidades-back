
import prismaClient from "../../prisma";

class ListDocumentsSentService {
  async execute() {
    const documentos = await prismaClient.documento.findMany({
      orderBy: { dataCriacao: 'desc' },
      include: {
        atendimento: {
          select: {
            id: true,
            nomeCompleto: true,
            cpf: true
          }
        },
        operadorUpload: {
          select: {
            id: true,
            nome: true,
            email: true
          }
        }
      }
    });

    return documentos;
  }
}

export { ListDocumentsSentService };

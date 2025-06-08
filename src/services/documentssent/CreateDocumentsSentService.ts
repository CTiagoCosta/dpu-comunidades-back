
import prismaClient from "../../prisma";
import { TipoDocumento } from "../../generated/prisma";

interface CreatedocumentsSentRequest {
  atendimentoId: string;
  nomeOriginal: string;
  nomeArmazenamento: string;
  tipo: string;
  tamanho: number;
  caminho: string;
  tipoDocumento: TipoDocumento;
  operadorUploadId: string;
}

class CreateDocumentsSentService {
  async execute(data: CreatedocumentsSentRequest) {
    const documentsSent = await prismaClient.documento.create({
      data: {
        atendimentoId: data.atendimentoId,
        nomeOriginal: data.nomeOriginal,
        nomeArmazenamento: data.nomeArmazenamento,
        tipo: data.tipo,
        tamanho: data.tamanho,
        caminho: data.caminho,
        tipoDocumento: data.tipoDocumento,
        operadorUploadId: data.operadorUploadId,
      }
    });

    return documentsSent;
  }
}

export { CreateDocumentsSentService };

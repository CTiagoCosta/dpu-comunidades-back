
import { Request, Response } from 'express';
import { CreateDocumentsSentService } from '../../services/documentssent/CreateDocumentsSentService';

class CreateDocumentsSentController {
  async handle(req: Request, res: Response) {
    const operadorUploadId = req.user_id;
    const {
      atendimentoId,
      nomeOriginal,
      nomeArmazenamento,
      tipo,
      tamanho,
      caminho,
      tipoDocumento
    } = req.body;

    const service = new CreateDocumentsSentService();
    const documento = await service.execute({
      atendimentoId,
      nomeOriginal,
      nomeArmazenamento,
      tipo,
      tamanho,
      caminho,
      tipoDocumento,
      operadorUploadId
    });

    return res.status(201).json(documento);
  }
}

export { CreateDocumentsSentController };

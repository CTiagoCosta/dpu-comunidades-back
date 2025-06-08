import { Request, Response } from "express";
import prismaClient from "../../prisma";

class UploadDocumentController {
  async handle(req: Request, res: Response) {
    const files = req.files as Express.Multer.File[];
    const userId = req.user_id;
    const { atendimentoId, tipoDocumento } = req.body;

    try {
      const documentos = await Promise.all(
        files.map((file) =>
          prismaClient.documento.create({
            data: {
              nomeOriginal: file.originalname,
              nomeArmazenamento: file.filename,
              tipo: file.mimetype,
              tamanho: file.size,
              caminho: file.path,
              tipoDocumento,
              atendimentoId,
              operadorUploadId: userId,
            }
          })
        )
      );

      return res.status(201).json({ ok: true, documentos });
    } catch (error) {
      return res.status(500).json({ error: "Erro ao salvar documentos." });
    }
  }
}

export { UploadDocumentController };
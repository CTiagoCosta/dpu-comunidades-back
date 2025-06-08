import e, { Request, Response } from "express";
import { ListDocumentsSentService } from "../../services/documentssent/ListDocumentsSentService";

class ListDocumentsSentController {
    async handle(req: Request, res: Response) {
        const listDocumentsSentService = new ListDocumentsSentService();
        try {
            const documentos = await listDocumentsSentService.execute();
            res.json(documentos);
        } catch (error) {
            res.status(500).json({ error: "Erro ao listar documentos enviados." });
        }
    }  
}

export { ListDocumentsSentController };
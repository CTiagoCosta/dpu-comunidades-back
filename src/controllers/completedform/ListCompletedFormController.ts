import { Request, Response } from "express";
import { ListCompletedFormService } from "../../services/completedform/ListCompletedFormService";

class ListCompletedFormController {
    async handle(req: Request, res: Response) {
        const listCompletedFormService = new ListCompletedFormService();
        try {
            const completedForms = await listCompletedFormService.execute();
            res.json(completedForms);
        } catch (error) {
            res.status(500).json({ error: "Erro ao listar formulários preenchidos." });
        }
    }
}

export { ListCompletedFormController };
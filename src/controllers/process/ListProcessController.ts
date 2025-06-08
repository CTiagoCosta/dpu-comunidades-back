import { Request, Response } from "express";
import { ListProcessService } from "../../services/process/ListProcessService";

class ListProcessController {
    async handle(req: Request, res: Response) {
        const listProcessService = new ListProcessService();
        try {
            const processes = await listProcessService.execute();
            res.json(processes);
        } catch (error) {
            res.status(500).json({ error: "Erro ao listar processos." });
        }
    }
}   

export { ListProcessController };

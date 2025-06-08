
import { Request, Response } from 'express';
import { ListQueueService } from '../../services/queue/ListQueueService';

class ListQueueController {
  async handle(req: Request, res: Response) {
    const listQueueService = new ListQueueService();
    try {
      const queue = await listQueueService.execute();
       res.json(queue);
    } catch (error) {
       res.status(500).json({ error: 'Erro ao listar fila de atendimeno' });
    }
  }
}

export { ListQueueController };

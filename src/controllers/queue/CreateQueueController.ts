
import { Request, Response } from 'express';
import { CreateQueueService } from '../../services/queue/CreateQueueService';

class CreateQueueController {
  async handle(req: Request, res: Response) {
    const {
      nomeCompleto,
      nomeSocial,
      cpf,
      telefone,
      isPrioridade
    } = req.body;

    const operadorTriagemId = req.user_id; // ID do usuário autenticado

    const service = new CreateQueueService();

    try {
      const fila = await service.execute({
        nomeCompleto,
        nomeSocial,
        cpf,
        telefone,
        isPrioridade,
        operadorTriagemId,
      });

      return res.status(201).json(fila);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export { CreateQueueController };

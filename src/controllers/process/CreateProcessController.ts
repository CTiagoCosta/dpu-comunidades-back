
import { Request, Response } from 'express';
import { CreateProcessService } from '../../services/process/CreateProcessService';
import prismaClient from '../../prisma';

class CreateProcessController {
  async handle(req: Request, res: Response) {
    const userId = req.user_id;
    const {
      numeroProcesso,
      resultado,
      resultadoDetalhado,
      valoresAtrasados,
      beneficios
    } = req.body;

    // Busca o atendimento vinculado ao usuário logado
    const atendimento = await prismaClient.atendimento.findFirst({
      where: {
        operadorId: userId
      },
      orderBy: {
        dataCriacao: 'desc'
      }
    });

    if (!atendimento) {
      return res.status(404).json({ error: "Nenhum atendimento encontrado para este usuário." });
    }

    const service = new CreateProcessService();
    const processo = await service.execute({
      atendimentoId: atendimento.id,
      numeroProcesso,
      resultado,
      resultadoDetalhado,
      valoresAtrasados,
      beneficios
    });

    return res.status(201).json(processo);
  }
}
export { CreateProcessController };

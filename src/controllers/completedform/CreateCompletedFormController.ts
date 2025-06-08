
import { Request, Response } from 'express';
import { CreateCompletedFormService } from '../../services/completedform/CreateCompletedFormService';

class CreateCompletedFormController {
  async handle(req: Request, res: Response) {
    const {
      atendimentoId,
      tipoFormulario,
      dadosFormulario
    } = req.body;

    const result = new CreateCompletedFormService();
    const completedForm = await result.execute({
      atendimentoId,
      tipoFormulario,
      dadosFormulario
    });

    return res.status(201).json(completedForm);
  }
}

export { CreateCompletedFormController };

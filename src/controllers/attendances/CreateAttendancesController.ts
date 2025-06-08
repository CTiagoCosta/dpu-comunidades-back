
import { Request, Response } from 'express';
import { CreateAttendancesService } from '../../services/attendances/CreateAttendancesService';

class CreateAttendancesController {
  async handle(req: Request, res: Response) {
    const operadorId = req.user_id;
    const {
      nomeCompleto, nomeSocial, cpf, dataNascimento, telefone, email, tipoAtendimento,
      capacidadeCivil, estadoCivil, profissao, tipoDomicilio, descricaoDomicilio,
      membrosFamiliares, rendaFamiliar, tipoDemanda, descricaoAtendimento, observacoes,
      formId, formTipo, logradouro, numero, complemento, bairro, cidade, estado, cep, filaId
    } = req.body;

    const service = new CreateAttendancesService();
    const atendimento = await service.execute({
      nomeCompleto, nomeSocial, cpf, dataNascimento, telefone, email, tipoAtendimento,
      capacidadeCivil, estadoCivil, profissao, tipoDomicilio, descricaoDomicilio,
      membrosFamiliares, rendaFamiliar, tipoDemanda, descricaoAtendimento, observacoes,
      formId, formTipo, logradouro, numero, complemento, bairro, cidade, estado, cep, filaId,
      operadorId
    });

    return res.status(201).json(atendimento);
  }
}

export { CreateAttendancesController };

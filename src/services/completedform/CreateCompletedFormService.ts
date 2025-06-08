import prismaClient from "../../prisma";
import { TipoFormulario } from "../../generated/prisma"; 

interface CreateCompletedFormRequest {
  atendimentoId: string;
  tipoFormulario: TipoFormulario; // <-- ENUM do Prisma
  dadosFormulario: any;
}

class CreateCompletedFormService {
  [x: string]: any;
  async execute(data: CreateCompletedFormRequest) {
    const formulario = await prismaClient.formularioPreenchido.create({
      data: {
        atendimentoId: data.atendimentoId,
        tipoFormulario: data.tipoFormulario,
        dadosFormulario: data.dadosFormulario
      }
    });

    return formulario;
  }
}

export { CreateCompletedFormService };

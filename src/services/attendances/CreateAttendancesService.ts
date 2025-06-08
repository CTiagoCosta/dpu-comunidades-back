
import prismaClient from "../../prisma";

interface CreateAttendancesRequest {
  nomeCompleto: string;
  nomeSocial?: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
  email?: string;
  tipoAtendimento: string;
  capacidadeCivil?: string;
  estadoCivil?: string;
  profissao?: string;
  tipoDomicilio?: string;
  descricaoDomicilio?: string;
  membrosFamiliares?: string;
  rendaFamiliar?: string;
  tipoDemanda?: string;
  descricaoAtendimento: string;
  observacoes?: string;
  formId: string;
  formTipo: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  filaId?: string;
  operadorId: string;
}

class CreateAttendancesService {
  async execute(data: CreateAttendancesRequest) {
    const atendimento = await prismaClient.atendimento.create({
      data,
    });

    return atendimento;
  }
}

export { CreateAttendancesService };

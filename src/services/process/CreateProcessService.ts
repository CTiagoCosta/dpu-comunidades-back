import prismaClient from "../../prisma";

interface CreateProcessRequest {
  atendimentoId: string;
  numeroProcesso: string;
  resultado: string;
  resultadoDetalhado?: string;
  valoresAtrasados?: string;
  beneficios?: string;
}

class CreateProcessService {
  async execute(data: CreateProcessRequest) {
    const { atendimentoId } = data;

    // Verifica se já existe processo para este atendimento
    const processoExistente = await prismaClient.processo.findUnique({
      where: { atendimentoId }
    });

    if (processoExistente) {
      throw new Error("Já existe um processo vinculado a este atendimento.");
    }

    const processo = await prismaClient.processo.create({
      data
    });

    return processo;
  }
}

export { CreateProcessService };

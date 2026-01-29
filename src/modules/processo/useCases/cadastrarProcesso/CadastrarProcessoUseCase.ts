import prismaClient from "../../../../prisma";
import {
  CadastrarProcessoRequest,
  CadastrarProcessoResponse,
} from "./CadastrarProcessoDtos";

export class CadastrarProcessoUseCase {
  async execute(request: CadastrarProcessoRequest): Promise<CadastrarProcessoResponse> {
    const {
      primeiroAtendimentoId,
      numeroProcesso,
      resultado,
      resultadoDetalhado,
      valoresAtrasados,
      beneficios,
    } = request;

    const primeiroAtendimento = await prismaClient.primeiroAtendimento.findUnique({
      where: { id: primeiroAtendimentoId },
      include: {
        fila: true,
      },
    });

    if (!primeiroAtendimento) {
      throw new Error("Primeiro atendimento não encontrado");
    }

    if (primeiroAtendimento.status !== "CONCLUIDO") {
      throw new Error("Apenas atendimentos concluídos podem ter processo cadastrado");
    }

    let atendimento = await prismaClient.atendimento.findFirst({
      where: { filaId: primeiroAtendimento.filaId },
    });

    if (!atendimento) {
      atendimento = await prismaClient.atendimento.create({
        data: {
          capacidadeCivil: primeiroAtendimento.capacidadeCivil || true,
          cep: primeiroAtendimento.cep || "00000-000",
          endereco: primeiroAtendimento.endereco || "Não informado",
          numero: primeiroAtendimento.numero || 0,
          complemento: primeiroAtendimento.complemento,
          bairro: primeiroAtendimento.bairro || "Não informado",
          cidade: primeiroAtendimento.cidade || "Não informado",
          uf: primeiroAtendimento.uf || "XX",
          processosAndamento: primeiroAtendimento.processosAndamento || "NAO",
          estadoCivilId: primeiroAtendimento.estadoCivilId || 1,
          tipoDomicilioId: primeiroAtendimento.tipoDomicilioId || 1,
          tipoDemandaPrevidenciariaId: primeiroAtendimento.tipoDemandaPrevidenciariaId || 1,
          competenciaJudicialId: primeiroAtendimento.competenciaJudicialId || 1,
          operadorId: primeiroAtendimento.operadorId,
          filaId: primeiroAtendimento.filaId,
        },
      });
    }

    const processoExistente = await prismaClient.processo.findUnique({
      where: { atendimentoId: atendimento.id },
    });

    // Converter beneficios para JSON string se for um objeto
    const beneficiosString = beneficios
      ? (typeof beneficios === 'object' ? JSON.stringify(beneficios) : beneficios)
      : null;

    let processo;

    if (processoExistente) {
      processo = await prismaClient.processo.update({
        where: { id: processoExistente.id },
        data: {
          numeroProcesso,
          resultado,
          resultadoDetalhado,
          valoresAtrasados,
          beneficios: beneficiosString,
          dataAtualizacao: new Date(),
        },
      });
    } else {
      processo = await prismaClient.processo.create({
        data: {
          numeroProcesso,
          resultado,
          resultadoDetalhado,
          valoresAtrasados,
          beneficios: beneficiosString,
          atendimentoId: atendimento.id,
        },
      });
    }

    return {
      id: processo.id,
      numeroProcesso: processo.numeroProcesso,
      resultado: processo.resultado,
      resultadoDetalhado: processo.resultadoDetalhado || undefined,
      valoresAtrasados: processo.valoresAtrasados || undefined,
      beneficios: processo.beneficios || undefined,
      dataAtualizacao: processo.dataAtualizacao,
      atendimentoId: processo.atendimentoId,
    };
  }
}

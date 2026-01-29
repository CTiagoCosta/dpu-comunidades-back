import prismaClient from "../../../../prisma";
import {
  BuscarPorCpfRequest,
  BuscarPorCpfResponse,
} from "./BuscarPorCpfDtos";

export class BuscarPorCpfUseCase {
  async execute(request: BuscarPorCpfRequest): Promise<BuscarPorCpfResponse> {
    const { cpf } = request;

    const cpfLimpo = cpf.replace(/\D/g, "");

    const fila = await prismaClient.filaAtendimento.findFirst({
      where: {
        cpf: {
          contains: cpfLimpo,
        },
        primeiroAtendimento: {
          status: "CONCLUIDO",
        },
      },
      include: {
        primeiroAtendimento: {
          include: {
            tipoDemandaPrevidenciaria: true,
          },
        },
      },
      orderBy: {
        dataEntrada: "desc",
      },
    });

    if (!fila || !fila.primeiroAtendimento) {
      return { encontrado: false };
    }

    const atendimentoLegacy = await prismaClient.atendimento.findFirst({
      where: { filaId: fila.id },
      include: {
        processo: true,
      },
    });

    const pa = fila.primeiroAtendimento;

    // Parse beneficios se for string JSON
    let beneficiosParsed = undefined;
    if (atendimentoLegacy?.processo?.beneficios) {
      try {
        beneficiosParsed = typeof atendimentoLegacy.processo.beneficios === 'string'
          ? JSON.parse(atendimentoLegacy.processo.beneficios)
          : atendimentoLegacy.processo.beneficios;
      } catch {
        beneficiosParsed = { tipo: atendimentoLegacy.processo.beneficios };
      }
    }

    return {
      encontrado: true,
      atendimento: {
        id: pa.id,
        nomeCompleto: fila.nomeCompleto,
        cpf: fila.cpf,
        telefone: fila.telefone,
        tipoDemanda: pa.tipoDemandaPrevidenciaria?.descricao || "Não informado",
        dataConclusao: pa.dataConclusao || pa.dataUltimaAtualizacao,
        descricaoAtendimento: pa.observacoesViabilidade || pa.fundamentacaoViabilidade || undefined,
        temProcesso: !!atendimentoLegacy?.processo,
        dadosProcesso: atendimentoLegacy?.processo
          ? {
              id: atendimentoLegacy.processo.id,
              numeroProcesso: atendimentoLegacy.processo.numeroProcesso,
              resultado: atendimentoLegacy.processo.resultado,
              resultadoDetalhado: atendimentoLegacy.processo.resultadoDetalhado || undefined,
              valoresAtrasados: atendimentoLegacy.processo.valoresAtrasados || undefined,
              beneficios: beneficiosParsed,
            }
          : undefined,
      },
    };
  }
}

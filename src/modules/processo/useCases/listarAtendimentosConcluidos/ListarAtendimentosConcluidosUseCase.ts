import prismaClient from "../../../../prisma";
import {
  AtendimentoConcluidoItem,
  ListarAtendimentosConcluidosResponse,
} from "./ListarAtendimentosConcluidosDtos";

export class ListarAtendimentosConcluidosUseCase {
  async execute(): Promise<ListarAtendimentosConcluidosResponse> {
    const primeiroAtendimentos = await prismaClient.primeiroAtendimento.findMany({
      where: {
        status: "CONCLUIDO",
      },
      include: {
        fila: {
          select: {
            id: true,
            nomeCompleto: true,
            cpf: true,
            telefone: true,
          },
        },
        tipoDemandaPrevidenciaria: {
          select: {
            descricao: true,
          },
        },
      },
      orderBy: {
        dataConclusao: "desc",
      },
    });

    const processos = await prismaClient.processo.findMany({
      select: {
        id: true,
        numeroProcesso: true,
        resultado: true,
        resultadoDetalhado: true,
        valoresAtrasados: true,
        beneficios: true,
        atendimentoId: true,
      },
    });

    const processosMap = new Map(
      processos.map((p) => [p.atendimentoId, p])
    );

    const atendimentosLegacy = await prismaClient.atendimento.findMany({
      where: {
        filaId: {
          in: primeiroAtendimentos.map((pa) => pa.filaId),
        },
      },
      select: {
        id: true,
        filaId: true,
      },
    });

    const filaToAtendimentoMap = new Map(
      atendimentosLegacy.map((a) => [a.filaId, a.id])
    );

    const atendimentos: AtendimentoConcluidoItem[] = primeiroAtendimentos.map((pa) => {
      const atendimentoId = filaToAtendimentoMap.get(pa.filaId);
      const processo = atendimentoId ? processosMap.get(atendimentoId) : undefined;

      // Parse beneficios se for string JSON
      let beneficiosParsed = undefined;
      if (processo?.beneficios) {
        try {
          beneficiosParsed = typeof processo.beneficios === 'string'
            ? JSON.parse(processo.beneficios)
            : processo.beneficios;
        } catch {
          beneficiosParsed = { tipo: processo.beneficios };
        }
      }

      return {
        id: pa.id,
        nomeCompleto: pa.fila.nomeCompleto,
        cpf: pa.fila.cpf,
        telefone: pa.fila.telefone,
        tipoDemanda: pa.tipoDemandaPrevidenciaria?.descricao || "Não informado",
        dataConclusao: pa.dataConclusao || pa.dataUltimaAtualizacao,
        dataCriacao: pa.dataInicio,
        temProcesso: !!processo,
        processo: processo
          ? {
              id: processo.id,
              numeroProcesso: processo.numeroProcesso,
              resultado: processo.resultado,
              resultadoDetalhado: processo.resultadoDetalhado || undefined,
              valoresAtrasados: processo.valoresAtrasados || undefined,
              beneficios: beneficiosParsed,
            }
          : undefined,
      };
    });

    return {
      atendimentos,
      total: atendimentos.length,
    };
  }
}

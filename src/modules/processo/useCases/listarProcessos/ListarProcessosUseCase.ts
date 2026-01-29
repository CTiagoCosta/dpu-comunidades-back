import prismaClient from "../../../../prisma";
import { ProcessoItem, ListarProcessosResponse } from "./ListarProcessosDtos";

export class ListarProcessosUseCase {
  async execute(): Promise<ListarProcessosResponse> {
    try {
      const processos = await prismaClient.processo.findMany({
        include: {
          atendimento: {
            include: {
              fila: true,
              tipoDemandaPrevidenciaria: true,
            },
          },
        },
        orderBy: {
          dataAtualizacao: "desc",
        },
      });

      const processosFormatados: ProcessoItem[] = processos.map((processo) => {
        // Parse beneficios se existir
        let beneficios: { tipo: string; valor?: string } | undefined;
        if (processo.beneficios) {
          try {
            beneficios = JSON.parse(processo.beneficios);
          } catch {
            beneficios = { tipo: processo.beneficios };
          }
        }

        return {
          id: processo.id,
          numeroProcesso: processo.numeroProcesso,
          resultado: processo.resultado,
          resultadoDetalhado: processo.resultadoDetalhado || undefined,
          valoresAtrasados: processo.valoresAtrasados || undefined,
          beneficios,
          recebimentoBeneficio60Dias: false,
          informacaoRecebimentoFone135: false,
          informacaoRecebimentoUnidadesDPU: false,
          recebimentoAtrasados60Dias: false,
          acompanhamentoTRF3: false,
          aguardarTransitoJulgado: false,
          dataCriacao: processo.dataAtualizacao,
          dataAtualizacao: processo.dataAtualizacao,
          assistido: {
            nomeCompleto: processo.atendimento?.fila?.nomeCompleto || "N/A",
            cpf: processo.atendimento?.fila?.cpf || undefined,
            tipoDemanda: processo.atendimento?.tipoDemandaPrevidenciaria?.descricao || undefined,
          },
        };
      });

      return {
        processos: processosFormatados,
        total: processosFormatados.length,
      };
    } catch (error) {
      console.error("[ListarProcessosUseCase] Erro:", error);
      throw error;
    }
  }
}

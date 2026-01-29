import prismaClient from "../../../../prisma";
import {
  ObterRelatoriosRequest,
  ObterRelatoriosResponse,
  AtendimentoPorDia,
  TipoDemanda,
  TempoEsperaPorDia,
  AtendimentoDetalhado,
} from "./ObterRelatoriosDtos";

export class ObterRelatoriosUseCase {
  async execute(request: ObterRelatoriosRequest): Promise<ObterRelatoriosResponse> {
    try {
      const { periodo, tipoAtendimento } = request;

      const { dataInicio, dataInicioAnterior, dataFimAnterior } = this.calcularPeriodo(periodo);

      const whereClause: any = {
        dataEntrada: { gte: dataInicio },
      };

      if (tipoAtendimento && tipoAtendimento !== "todos") {
        whereClause.tipoAtendimento = {
          descricao: { contains: tipoAtendimento },
        };
      }

      const whereClauseAnterior: any = {
        dataEntrada: { gte: dataInicioAnterior, lt: dataFimAnterior },
      };

      if (tipoAtendimento && tipoAtendimento !== "todos") {
        whereClauseAnterior.tipoAtendimento = {
          descricao: { contains: tipoAtendimento },
        };
      }

      const [
        atendimentosAtuais,
        atendimentosAnteriores,
        tiposDemandaData,
        atendimentosDetalhados,
      ] = await Promise.all([
        prismaClient.filaAtendimento.findMany({
          where: whereClause,
          include: {
            tipoAtendimento: true,
            operadorAtendimento: { select: { nome: true } },
            operadorTriagem: { select: { nome: true } },
          },
          orderBy: { dataEntrada: "desc" },
        }),
        prismaClient.filaAtendimento.findMany({
          where: whereClauseAnterior,
        }),
        prismaClient.filaAtendimento.groupBy({
          by: ["tipoAtendimentoId"],
          where: whereClause,
          _count: { id: true },
        }),
        prismaClient.filaAtendimento.findMany({
          where: whereClause,
          include: {
            tipoAtendimento: true,
            operadorAtendimento: { select: { nome: true } },
            operadorTriagem: { select: { nome: true } },
          },
          orderBy: { dataEntrada: "desc" },
          take: 50,
        }),
      ]);

      const tiposAtendimento = await prismaClient.tipoAtendimento.findMany();
      const tiposMap = new Map(tiposAtendimento.map((t) => [t.id, t.descricao]));

      const resumo = this.calcularResumo(atendimentosAtuais, atendimentosAnteriores);
      const atendimentosPorDia = this.agruparPorDia(atendimentosAtuais);
      const tiposDemanda = this.mapearTiposDemanda(tiposDemandaData, tiposMap);
      const tempoEsperaPorDia = this.calcularTempoEsperaPorDia(atendimentosAtuais);
      const detalhados = this.mapearDetalhados(atendimentosDetalhados);

      return {
        resumo,
        atendimentosPorDia,
        tiposDemanda,
        tempoEsperaPorDia,
        atendimentosDetalhados: detalhados,
      };
    } catch (error) {
      console.error("[ObterRelatoriosUseCase] Erro:", error);
      throw error;
    }
  }

  private calcularPeriodo(periodo: string): {
    dataInicio: Date;
    dataInicioAnterior: Date;
    dataFimAnterior: Date;
  } {
    const agora = new Date();
    let diasAtras = 7;

    switch (periodo) {
      case "30dias":
        diasAtras = 30;
        break;
      case "90dias":
        diasAtras = 90;
        break;
      case "ano":
        diasAtras = 365;
        break;
      default:
        diasAtras = 7;
    }

    const dataInicio = new Date(agora);
    dataInicio.setDate(dataInicio.getDate() - diasAtras);
    dataInicio.setHours(0, 0, 0, 0);

    const dataFimAnterior = new Date(dataInicio);
    const dataInicioAnterior = new Date(dataFimAnterior);
    dataInicioAnterior.setDate(dataInicioAnterior.getDate() - diasAtras);

    return { dataInicio, dataInicioAnterior, dataFimAnterior };
  }

  private calcularResumo(atuais: any[], anteriores: any[]) {
    const totalAtendimentos = atuais.length;
    const totalAnteriores = anteriores.length;

    const concluidos = atuais.filter((a) => a.status === "ATENDIDO").length;
    const concluidosAnteriores = anteriores.filter((a) => a.status === "ATENDIDO").length;

    const taxaConclusao = totalAtendimentos > 0 ? Math.round((concluidos / totalAtendimentos) * 100) : 0;
    const taxaConclusaoAnterior = totalAnteriores > 0 ? Math.round((concluidosAnteriores / totalAnteriores) * 100) : 0;

    const temposEspera = atuais
      .filter((a) => a.dataInicio && a.dataEntrada)
      .map((a) => {
        const entrada = new Date(a.dataEntrada).getTime();
        const inicio = new Date(a.dataInicio).getTime();
        return Math.round((inicio - entrada) / 60000);
      });

    const tempoMedioEspera = temposEspera.length > 0
      ? Math.round(temposEspera.reduce((a, b) => a + b, 0) / temposEspera.length)
      : 0;

    const temposEsperaAnteriores = anteriores
      .filter((a) => a.dataInicio && a.dataEntrada)
      .map((a) => {
        const entrada = new Date(a.dataEntrada).getTime();
        const inicio = new Date(a.dataInicio).getTime();
        return Math.round((inicio - entrada) / 60000);
      });

    const tempoMedioAnterior = temposEsperaAnteriores.length > 0
      ? Math.round(temposEsperaAnteriores.reduce((a, b) => a + b, 0) / temposEsperaAnteriores.length)
      : 0;

    const calcVariacao = (atual: number, anterior: number) => {
      if (anterior === 0) return atual > 0 ? 100 : 0;
      return Math.round(((atual - anterior) / anterior) * 100);
    };

    return {
      totalAtendimentos,
      tempoMedioEspera,
      atendimentosConcluidos: concluidos,
      taxaConclusao,
      variacaoAtendimentos: calcVariacao(totalAtendimentos, totalAnteriores),
      variacaoTempoEspera: calcVariacao(tempoMedioEspera, tempoMedioAnterior),
      variacaoConcluidos: calcVariacao(concluidos, concluidosAnteriores),
      variacaoTaxaConclusao: calcVariacao(taxaConclusao, taxaConclusaoAnterior),
    };
  }

  private agruparPorDia(atendimentos: any[]): AtendimentoPorDia[] {
    const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    const contagem = new Map<string, { count: number; data: string }>();

    atendimentos.forEach((a) => {
      const data = new Date(a.dataEntrada);
      const diaSemana = diasSemana[data.getDay()];
      const dataStr = data.toISOString().split("T")[0];

      if (!contagem.has(diaSemana)) {
        contagem.set(diaSemana, { count: 0, data: dataStr });
      }
      const atual = contagem.get(diaSemana)!;
      atual.count++;
    });

    return diasSemana.map((dia) => ({
      name: dia,
      atendimentos: contagem.get(dia)?.count || 0,
      data: contagem.get(dia)?.data || "",
    }));
  }

  private mapearTiposDemanda(
    dados: { tipoAtendimentoId: number; _count: { id: number } }[],
    tiposMap: Map<number, string>
  ): TipoDemanda[] {
    return dados.map((d) => ({
      name: tiposMap.get(d.tipoAtendimentoId) || "Outros",
      value: d._count.id,
    }));
  }

  private calcularTempoEsperaPorDia(atendimentos: any[]): TempoEsperaPorDia[] {
    const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    const temposPorDia = new Map<string, { tempos: number[]; data: string }>();

    atendimentos.forEach((a) => {
      if (!a.dataInicio || !a.dataEntrada) return;

      const data = new Date(a.dataEntrada);
      const diaSemana = diasSemana[data.getDay()];
      const dataStr = data.toISOString().split("T")[0];

      const entrada = new Date(a.dataEntrada).getTime();
      const inicio = new Date(a.dataInicio).getTime();
      const tempoEspera = Math.round((inicio - entrada) / 60000);

      if (!temposPorDia.has(diaSemana)) {
        temposPorDia.set(diaSemana, { tempos: [], data: dataStr });
      }
      temposPorDia.get(diaSemana)!.tempos.push(tempoEspera);
    });

    return diasSemana.map((dia) => {
      const dados = temposPorDia.get(dia);
      const tempos = dados?.tempos || [];
      const media = tempos.length > 0 ? Math.round(tempos.reduce((a, b) => a + b, 0) / tempos.length) : 0;

      return {
        name: dia,
        tempo: media,
        data: dados?.data || "",
      };
    });
  }

  private mapearDetalhados(atendimentos: any[]): AtendimentoDetalhado[] {
    return atendimentos.map((a) => {
      let tempoEspera = "N/A";
      if (a.dataInicio && a.dataEntrada) {
        const entrada = new Date(a.dataEntrada).getTime();
        const inicio = new Date(a.dataInicio).getTime();
        const minutos = Math.round((inicio - entrada) / 60000);
        tempoEspera = `${minutos} min`;
      }

      const statusMap: { [key: string]: string } = {
        AGUARDANDO: "Aguardando",
        EM_ATENDIMENTO: "Em Andamento",
        ATENDIDO: "Concluido",
        CANCELADO: "Cancelado",
      };

      return {
        id: a.id,
        data: new Date(a.dataEntrada).toLocaleDateString("pt-BR"),
        tipo: a.tipoAtendimento?.descricao || "N/A",
        operador: a.operadorAtendimento?.nome || a.operadorTriagem?.nome || "N/A",
        tempoEspera,
        status: statusMap[a.status] || a.status,
      };
    });
  }
}

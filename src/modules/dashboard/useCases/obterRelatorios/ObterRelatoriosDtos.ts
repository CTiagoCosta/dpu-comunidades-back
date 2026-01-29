export interface ObterRelatoriosRequest {
  periodo: "7dias" | "30dias" | "90dias" | "ano";
  tipoAtendimento?: string;
}

export interface ResumoEstatisticas {
  totalAtendimentos: number;
  tempoMedioEspera: number;
  atendimentosConcluidos: number;
  taxaConclusao: number;
  variacaoAtendimentos: number;
  variacaoTempoEspera: number;
  variacaoConcluidos: number;
  variacaoTaxaConclusao: number;
}

export interface AtendimentoPorDia {
  name: string;
  atendimentos: number;
  data: string;
}

export interface TipoDemanda {
  name: string;
  value: number;
}

export interface TempoEsperaPorDia {
  name: string;
  tempo: number;
  data: string;
}

export interface AtendimentoDetalhado {
  id: string;
  data: string;
  tipo: string;
  operador: string;
  tempoEspera: string;
  status: string;
}

export interface ObterRelatoriosResponse {
  resumo: ResumoEstatisticas;
  atendimentosPorDia: AtendimentoPorDia[];
  tiposDemanda: TipoDemanda[];
  tempoEsperaPorDia: TempoEsperaPorDia[];
  atendimentosDetalhados: AtendimentoDetalhado[];
}

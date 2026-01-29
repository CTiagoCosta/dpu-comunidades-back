export interface AtendimentoConcluidoItem {
  id: string;
  nomeCompleto: string;
  cpf: string;
  telefone: string;
  tipoDemanda: string;
  dataConclusao: Date;
  dataCriacao: Date;
  temProcesso: boolean;
  processo?: {
    id: string;
    numeroProcesso: string;
    resultado: string;
    resultadoDetalhado?: string;
    valoresAtrasados?: string;
    beneficios?: {
      tipo: string;
      valor?: string;
    };
  };
}

export interface ListarAtendimentosConcluidosResponse {
  atendimentos: AtendimentoConcluidoItem[];
  total: number;
}

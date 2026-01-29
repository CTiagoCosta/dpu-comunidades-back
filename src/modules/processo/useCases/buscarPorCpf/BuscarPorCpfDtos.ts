export interface BuscarPorCpfRequest {
  cpf: string;
}

export interface AtendimentoEncontrado {
  id: string;
  nomeCompleto: string;
  cpf: string;
  telefone: string;
  tipoDemanda: string;
  dataConclusao: Date;
  descricaoAtendimento?: string;
  temProcesso: boolean;
  dadosProcesso?: {
    id: string;
    numeroProcesso: string;
    resultado: string;
    resultadoDetalhado?: string;
    valoresAtrasados?: string;
    beneficios?: string;
  };
}

export interface BuscarPorCpfResponse {
  encontrado: boolean;
  atendimento?: AtendimentoEncontrado;
}

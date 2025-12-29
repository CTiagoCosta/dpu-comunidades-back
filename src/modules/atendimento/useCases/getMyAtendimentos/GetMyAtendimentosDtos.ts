export interface GetMyAtendimentosRequest {
  userId: string;
}

export interface AtendimentoItem {
  id: string;
  nomeCompleto: string;
  cpf: string;
  telefone: string;
  tipoAtendimento: {
    id: number;
    descricao: string;
  };
  status: string;
  dataEntrada: Date;
  dataInicio: Date | null;
  dataFim: Date | null;
  isPrioridade: boolean;
  tipoPrioridade?: {
    id: number;
    descricao: string;
  } | null;
  operadorTriagem: {
    id: string;
    name: string;
  };
  operadorAtendimento?: {
    id: string;
    name: string;
  } | null;
}

export interface GetMyAtendimentosResponse {
  atendimentos: AtendimentoItem[];
  total: number;
  hoje: number;
  concluidos: number;
}

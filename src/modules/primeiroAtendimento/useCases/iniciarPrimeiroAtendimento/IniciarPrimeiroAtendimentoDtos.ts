export interface IniciarPrimeiroAtendimentoRequest {
  filaId: string;
  operadorId: string;
}

export interface IniciarPrimeiroAtendimentoResponse {
  id: string;
  filaId: string;
  operadorId: string;
  status: string;
  etapaAtual: string;
  percentualConclusao: number;
  dataInicio: Date;
}

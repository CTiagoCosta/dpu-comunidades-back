export interface FinalizarAtendimentoRequest {
  primeiroAtendimentoId: string;
  operadorId: string;
}

export interface FinalizarAtendimentoResponse {
  id: string;
  status: string;
  percentualConclusao: number;
  finalizadoEm: Date;
  mensagem: string;
}

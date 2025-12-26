export interface SaveRetornoDemandaJudicialRequest {
  atendimentoId: string;
  pajAssistido: string;
  retornoRealizado: string;
  operadorId: string;
}

export interface SaveRetornoDemandaJudicialResponse {
  id: string;
  atendimentoId: string;
  pajAssistido: string;
  retornoRealizado: string;
  operadorId: string;
  dataCriacao: Date;
}

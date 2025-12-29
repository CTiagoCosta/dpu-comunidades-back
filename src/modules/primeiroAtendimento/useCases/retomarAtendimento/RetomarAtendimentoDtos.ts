export interface RetomarAtendimentoRequest {
  primeiroAtendimentoId: string;
}

export interface RetomarAtendimentoResponse {
  id: string;
  filaId: string;
  operadorId: string;
  status: string;
  etapaAtual: string;
  suspensoPeloOperador: boolean;
}

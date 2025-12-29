export interface SuspenderAtendimentoRequest {
  primeiroAtendimentoId: string;
  motivoSuspensao?: string;
}

export interface SuspenderAtendimentoResponse {
  id: string;
  filaId: string;
  operadorId: string;
  status: string;
  etapaAtual: string;
  suspensoPeloOperador: boolean;
  motivoSuspensao?: string;
  dataSuspensao: Date;
}

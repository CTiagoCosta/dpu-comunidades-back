export interface SaveOrientacaoJuridicaRequest {
  atendimentoId: string;
  orientacaoRealizada: string;
  operadorId?: string;
}

export interface SaveOrientacaoJuridicaResponse {
  id: string;
  atendimentoId: string;
  orientacaoRealizada: string;
  operadorId: string | null;
  dataCriacao: Date;
}

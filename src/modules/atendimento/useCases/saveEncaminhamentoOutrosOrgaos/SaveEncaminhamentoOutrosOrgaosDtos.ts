export interface SaveEncaminhamentoOutrosOrgaosRequest {
  atendimentoId: string;
  orgaoDestino: string;
  motivoEncaminhamento: string;
  observacoes?: string;
  operadorId?: string;
}

export interface SaveEncaminhamentoOutrosOrgaosResponse {
  id: string;
  orgaoDestino: string;
  motivoEncaminhamento: string;
  observacoes?: string;
  dataCriacao: Date;
  atendimentoId: string;
  operadorId?: string;
}

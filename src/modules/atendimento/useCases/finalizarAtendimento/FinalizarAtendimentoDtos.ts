export interface FinalizarAtendimentoRequestDto {
  atendimentoId: string;
}

export interface FinalizarAtendimentoResponseDto {
  id: string;
  status: string;
  dataFim: Date;
}

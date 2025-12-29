export interface SalvarCapacidadeCivilRequest {
  primeiroAtendimentoId: string;
  capacidadeCivil: boolean;
  concluirEtapa: boolean;
  operadorId: string;
}

export interface SalvarCapacidadeCivilResponse {
  id: string;
  status: string;
  etapaAtual: string;
  percentualConclusao: number;
  capacidadeCivil: boolean | null;
  etapaCapacidadeCivilConcluida: boolean;
  etapaCapacidadeCivilTimestamp: Date | null;
  dataUltimaAtualizacao: Date;
}

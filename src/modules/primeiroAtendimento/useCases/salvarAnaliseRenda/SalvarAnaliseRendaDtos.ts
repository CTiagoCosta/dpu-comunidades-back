export interface SalvarAnaliseRendaRequest {
  primeiroAtendimentoId: string;
  operadorId: string;
  possuiRenda: boolean;
  valorRendaFamiliar?: number;
  quantidadePessoas?: number;
  rendaPerCapita?: number;
  observacoes?: string;
  concluirEtapa?: boolean;
}

export interface SalvarAnaliseRendaResponse {
  id: string;
  status: string;
  etapaAtual: string;
  proximaEtapa: string | null;
  percentualConclusao: number;
  etapaConcluida: boolean;
}

export interface SalvarRepresentanteLegalRequest {
  primeiroAtendimentoId: string;
  operadorId: string;
  nomeRepresentante: string;
  cpfRepresentante: string;
  telefoneRepresentante?: string;
  grauParentesco: string;
  concluirEtapa?: boolean;
}

export interface SalvarRepresentanteLegalResponse {
  id: string;
  status: string;
  etapaAtual: string;
  proximaEtapa: string | null;
  percentualConclusao: number;
  etapaConcluida: boolean;
}

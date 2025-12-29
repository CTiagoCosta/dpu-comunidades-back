export interface SalvarTipoDemandaRequest {
  primeiroAtendimentoId: string;
  operadorId: string;
  tipoDemandaPrevidenciariaId: number;
  concluirEtapa?: boolean;
}

export interface SalvarTipoDemandaResponse {
  id: string;
  status: string;
  etapaAtual: string;
  proximaEtapa: string | null;
  percentualConclusao: number;
  etapaConcluida: boolean;
  tipoBeneficioSelecionado: string; // Para saber qual formulário carregar
}

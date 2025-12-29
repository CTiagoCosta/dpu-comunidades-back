export interface SalvarViabilidadeRequest {
  primeiroAtendimentoId: string;
  operadorId: string;
  viabilidadeDemanda?: string; // "VIAVEL" | "INVIAVEL" | "DUVIDOSA"
  fundamentacaoViabilidade?: string;
  observacoes?: string;
  competenciaJudicial?: string;
  dataInicioBeneficio?: string;
  parcelasVencidas?: string;
  valorCausa?: string;
  processosAndamento?: string;
  numeroProcesso?: string;
  concluirEtapa?: boolean;
}

export interface SalvarViabilidadeResponse {
  id: string;
  status: string;
  etapaAtual: string;
  proximaEtapa: string | null;
  percentualConclusao: number;
  etapaConcluida: boolean;
}

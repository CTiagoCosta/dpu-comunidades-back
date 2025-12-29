export interface SalvarFormularioBeneficioRequest {
  primeiroAtendimentoId: string;
  operadorId: string;
  tipoBeneficio: string; // "APOSENTADORIA_IDADE_RURAL" | "SEGURO_DEFESO" | etc
  dados: Record<string, any>; // Dados específicos de cada tipo de benefício
  concluirEtapa?: boolean;
}

export interface SalvarFormularioBeneficioResponse {
  id: string;
  status: string;
  etapaAtual: string;
  proximaEtapa: string | null;
  percentualConclusao: number;
  etapaConcluida: boolean;
}

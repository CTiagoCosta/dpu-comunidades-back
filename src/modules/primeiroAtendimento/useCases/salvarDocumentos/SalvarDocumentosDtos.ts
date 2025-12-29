export interface SalvarDocumentosRequest {
  primeiroAtendimentoId: string;
  operadorId: string;
  documentosApresentados?: string; // Pode ser string ou array (convertido no controller)
  documentosFaltantes?: string | string[];
  observacoes?: string;
  concluirEtapa?: boolean;
}

export interface SalvarDocumentosResponse {
  id: string;
  status: string;
  etapaAtual: string;
  proximaEtapa: string | null;
  percentualConclusao: number;
  etapaConcluida: boolean;
}

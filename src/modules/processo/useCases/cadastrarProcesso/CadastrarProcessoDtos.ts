export interface CadastrarProcessoRequest {
  primeiroAtendimentoId: string;
  numeroProcesso: string;
  resultado: string;
  resultadoDetalhado?: string;
  valoresAtrasados?: string;
  beneficios?: string;
}

export interface CadastrarProcessoResponse {
  id: string;
  numeroProcesso: string;
  resultado: string;
  resultadoDetalhado?: string;
  valoresAtrasados?: string;
  beneficios?: string;
  dataAtualizacao: Date;
  atendimentoId: string;
}

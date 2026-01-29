export interface ProcessoItem {
  id: string;
  numeroProcesso: string;
  resultado: string;
  resultadoDetalhado?: string;
  valoresAtrasados?: string;
  beneficios?: {
    tipo: string;
    valor?: string;
  };
  recebimentoBeneficio60Dias: boolean;
  informacaoRecebimentoFone135: boolean;
  informacaoRecebimentoUnidadesDPU: boolean;
  recebimentoAtrasados60Dias: boolean;
  acompanhamentoTRF3: boolean;
  aguardarTransitoJulgado: boolean;
  dataCriacao: Date;
  dataAtualizacao: Date;
  // Dados do atendimento/assistido
  assistido: {
    nomeCompleto: string;
    cpf?: string;
    tipoDemanda?: string;
  };
}

export interface ListarProcessosResponse {
  processos: ProcessoItem[];
  total: number;
}

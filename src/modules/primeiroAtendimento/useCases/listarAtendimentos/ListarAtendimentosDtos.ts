export interface ListarAtendimentosRequest {
  status?: 'EM_ATENDIMENTO' | 'CONCLUIDO' | 'SUSPENSO' | 'TODOS';
  operadorId?: string;  // Filtrar por operador
  dataInicio?: string;  // Data inicial
  dataFim?: string;     // Data final
  pagina?: number;
  limite?: number;
}

export interface AtendimentoListagemDTO {
  // Dados da Fila
  filaId: string;
  nomeCompleto: string;
  nomeSocial?: string | null;
  cpf: string;
  telefone: string;
  isPrioridade: boolean;
  statusFila: string;
  dataEntrada: Date;

  // Dados do PrimeiroAtendimento
  primeiroAtendimentoId: string;
  statusAtendimento: string;
  etapaAtual: string;
  percentualConclusao: number;
  dataInicio: Date;
  dataUltimaAtualizacao: Date;
  dataConclusao?: Date | null;

  // Dados do Operador
  operadorId: string;
  operadorNome: string;

  // Calculado
  statusExibicao: 'EM_ATENDIMENTO' | 'CONCLUIDO' | 'SUSPENSO';
  tempoAtendimento?: number; // em minutos
  diasSemAtualizacao?: number;
}

export interface ListarAtendimentosResponse {
  atendimentos: AtendimentoListagemDTO[];
  total: number;
  pagina: number;
  totalPaginas: number;
}

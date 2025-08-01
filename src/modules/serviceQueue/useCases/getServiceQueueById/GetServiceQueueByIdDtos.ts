export interface GetServiceQueueByIdResponse {
  id: string
  nomeCompleto: string
  nomeSocial?: string
  cpf: string
  telefone: string
  status: string
  isPrioridade: boolean
  migrante: boolean
  dataEntrada: Date
  tipoAtendimentoId: number
  operadorTriagemId: string
  tipoPrioridadeId?: number
  operadorTriagem?: any // Vou ter que tipa depois
  operadorAtendimento?: any
  tipoAtendimento?: any
  tipoPrioridade?: any
  atendimento?: any
}

export interface GetServiceQueueByIdInput {
  queueId: string
}
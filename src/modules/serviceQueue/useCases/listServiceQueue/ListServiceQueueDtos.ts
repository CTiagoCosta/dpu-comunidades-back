export interface ListServiceQueueResponse {
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
}
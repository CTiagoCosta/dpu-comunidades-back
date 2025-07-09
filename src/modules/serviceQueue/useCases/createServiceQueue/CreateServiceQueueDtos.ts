export interface CreateServiceQueueInput {
  fullName: string;
  socialName?: string;
  cpf: string;
  telephone: string;
  isPriority: boolean;
  migrante: boolean;
  screeningOperatorId: string;
  serviceTypeId: number;
  prioritaryTypeId?: number;
}

export type QueueStatus = "AGUARDANDO" | "EM_ATENDIMENTO" | "ATENDIDO" | "CANCELADO";

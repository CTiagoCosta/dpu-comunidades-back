export interface CreateAssistedInput {
  fullName: string;
  socialName?: string;
  cpf?: string;
  cellphone: string;
  isMigrant: boolean;
}

export interface AssistedOutput {
  id: string;
  fullName: string;
  socialName?: string;
  cpf?: string;
  cellphone: string;
  isMigrant: boolean;
}

export interface CreateAssistedInputAndAddToServiceQueue {
  assisted: CreateAssistedInput;
  isPriority: boolean;
  priorityTypeId: string;
  attendanceTypeId: string;
  operatorId: string;
}

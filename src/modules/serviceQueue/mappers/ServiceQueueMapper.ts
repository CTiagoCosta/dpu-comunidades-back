import { FilaAtendimento } from "../../../generated/prisma";
import {
  QueueStatus,
} from "../useCases/createServiceQueue/CreateServiceQueueDtos";

export abstract class ServiceQueueMapper {
  public static toDatabase(dto: any): FilaAtendimento {
    return {
      id: "",
      nomeCompleto: dto.fullName,
      nomeSocial: dto.socialName,
      cpf: dto.cpf,
      telefone: dto.telephone,
      status: dto.status as QueueStatus,
      isPrioridade: dto.isPriority,
      dataEntrada: dto.createdAt,
      dataInicio: null,
      dataFim: null,
      migrante: dto.migrante,
      operadorTriagemId: dto.screeningOperatorId,
      operadorAtendimentoId: null,
      tipoAtendimentoId: dto.serviceTypeId,
      tipoPrioridadeId: dto.prioritaryTypeId ?? null,
    };
  }
}

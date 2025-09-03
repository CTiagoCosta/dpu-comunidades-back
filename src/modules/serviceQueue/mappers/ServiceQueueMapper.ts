import { Triagem } from "../../../generated/prisma";

export abstract class ServiceQueueMapper {
  public static toDatabase(dto: any): Triagem {
    return {
      id: "",
      assistidoId: dto.assistedId,
      operadorTriagemId: dto.operatorId,
      tipoAtendimentoId: dto.attendanceTypeId,
      tipoPrioridadeId: dto.priorityTypeId,
      dataEntrada: new Date(),
      isPrioridade: dto.isPriority,
      status: "AGUARDANDO",
    };
  }
}

import { ListTypeofAttendanceServiceResponse } from "../useCase/listTypeOfAttendanceService/ListTypeOfAttendanceServiceDtos";
import { ListTypeofServiceResponse } from "../useCase/listTypeOfService/ListTypeOfServiceDtos";

export abstract class ComplementaryDataMapper {
  public static toListTypeofServiceResponse(
    data: any[]
  ): ListTypeofServiceResponse[] {
    return data.map((item) => ({
      id: item.id,
      description: item.descricao,
    }));
  }

  public static toListTypeofAttendanceServiceResponse(
    data: any[]
  ): ListTypeofAttendanceServiceResponse[] {
    return data.map((item) => ({
      id: item.id,
      description: item.descricao,
      attendanceId: item.atendimentoId,
    }));
  }
}

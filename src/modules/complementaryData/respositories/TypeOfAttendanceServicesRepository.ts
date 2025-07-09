import prismaClient from "../../../prisma";
import { ComplementaryDataMapper } from "../mappers/ComplementaryDataMapper";
import {
  ListTypeofAttendanceServiceInput,
  ListTypeofAttendanceServiceResponse,
} from "../useCase/listTypeOfAttendanceService/ListTypeOfAttendanceServiceDtos";

export class TypeOfAttendanceServicesRepository {
  private prisma = prismaClient;
  private mapper = ComplementaryDataMapper;

  constructor() {
    this.prisma = prismaClient;
    this.mapper = ComplementaryDataMapper;
  }

  async listTypeofAttendenceService(
    dto: ListTypeofAttendanceServiceInput
  ): Promise<ListTypeofAttendanceServiceResponse[] | null> {
    const result = await this.prisma.tipoServicoAtendimento.findMany({
      where: {
        atendimentoId: dto.attendenceId,
      },
    });
    return this.mapper.toListTypeofAttendanceServiceResponse(result) ?? null;
  }
}

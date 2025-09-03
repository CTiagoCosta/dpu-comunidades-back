import { TipoServicoAtendimento } from "@prisma/client";
import prismaClient from "../../../prisma";
import { ComplementaryDataMapper } from "../mappers/ComplementaryDataMapper";
import {
  ListTypeofAttendanceServiceInput,
  ListTypeofAttendanceServiceResponse,
} from "../useCase/listTypeOfAttendanceService/ListTypeOfAttendanceServiceDtos";
import { BaseRepository } from "../../shared/repositories/BaseRepository";

export class TypeOfAttendanceServicesRepository extends BaseRepository<TipoServicoAtendimento> {
  protected get model() {
    return this.prisma.tipoServicoAtendimento;
  }
  async listTypeofAttendenceService(
    dto: ListTypeofAttendanceServiceInput
  ): Promise<ListTypeofAttendanceServiceResponse[] | null> {
    const result = await this.model.findMany({
      where: {
        tipoAtendimentoId: dto.attendenceId,
      },
    });
    return (
      ComplementaryDataMapper.toListTypeofAttendanceServiceResponse(result) ??
      null
    );
  }
}

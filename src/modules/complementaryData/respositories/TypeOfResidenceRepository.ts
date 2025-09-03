import { TipoDomicilio } from "@prisma/client";
import { BaseRepository } from "../../shared/repositories/BaseRepository";
import { ComplementaryDataMapper } from "../mappers/ComplementaryDataMapper";
import { ListTypeofServiceResponse } from "../useCase/listTypeOfService/ListTypeOfServiceDtos";

export class TypeOfResidenceRepository extends BaseRepository<TipoDomicilio> {
  protected get model() {
    return this.prisma.tipoDomicilio;
  }

  async listAll(): Promise<ListTypeofServiceResponse[] | null> {
    const result = await this.model.findMany();
    return ComplementaryDataMapper.toListTypeofServiceResponse(result) ?? null;
  }
}

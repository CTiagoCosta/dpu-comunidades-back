import { EstadoCivil } from "@prisma/client";
import { ComplementaryDataMapper } from "../mappers/ComplementaryDataMapper";
import { ListPriorityTypeResponse } from "../useCase/listPriorityType/ListPriorityTypeDtos";
import { BaseRepository } from "../../shared/repositories/BaseRepository";

export class MaritalStatusRepository extends BaseRepository<EstadoCivil> {
  protected get model() {
    return this.prisma.estadoCivil;
  }

  async listAll(): Promise<ListPriorityTypeResponse[] | null> {
    const result = await this.model.findMany();
    return ComplementaryDataMapper.toListMaritalStatusResponse(result) ?? null;
  }
}

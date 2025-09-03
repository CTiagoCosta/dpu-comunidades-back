import { TipoAtendimento } from "@prisma/client";
import { ComplementaryDataMapper } from "../mappers/ComplementaryDataMapper";
import { ListTypeofServiceResponse } from "../useCase/listTypeOfService/ListTypeOfServiceDtos";
import { BaseRepository } from "../../shared/repositories/BaseRepository";

export class TypeOfServiceRepository extends BaseRepository<TipoAtendimento> {
  protected get model() {
    return this.prisma.tipoAtendimento;
  }

  async listTypeofService(): Promise<ListTypeofServiceResponse[] | null> {
    const result = await this.model.findMany();
    return ComplementaryDataMapper.toListTypeofServiceResponse(result) ?? null;
  }

  async findById(id: number): Promise<ListTypeofServiceResponse | null> {
    const result = await this.model.findFirst({
      where: { id },
    });
    const mapper = ComplementaryDataMapper.toListTypeofServiceResponse([
      result,
    ]);
    return mapper[0] ?? null;
  }
}

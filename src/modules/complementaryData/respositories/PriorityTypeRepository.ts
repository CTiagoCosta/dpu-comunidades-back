import { TipoPrioridade } from "@prisma/client";
import { ComplementaryDataMapper } from "../mappers/ComplementaryDataMapper";
import { ListPriorityTypeResponse } from "../useCase/listPriorityType/ListPriorityTypeDtos";
import { BaseRepository } from "../../shared/repositories/BaseRepository";

export class PriorityTypeRepository extends BaseRepository<TipoPrioridade> {
  protected get model() {
    return this.prisma.tipoPrioridade;
  }

  async listTypeofPriority(): Promise<ListPriorityTypeResponse[] | null> {
    const result = await this.model.findMany();
    return ComplementaryDataMapper.toListTypeofServiceResponse(result) ?? null;
  }

  async findById(id: number): Promise<ListPriorityTypeResponse | null> {
    const result = await this.model.findFirst({
      where: {
        id: id,
      },
    });
    const mapper = ComplementaryDataMapper.toListTypeofServiceResponse([result]);
    return mapper[0] ?? null;
  }
}

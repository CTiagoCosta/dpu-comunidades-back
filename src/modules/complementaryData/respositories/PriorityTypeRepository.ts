import { PrismaClient } from "../../../generated/prisma";
import { ComplementaryDataMapper } from "../mappers/ComplementaryDataMapper";
import { ListPriorityTypeResponse } from "../useCase/listPriorityType/ListPriorityTypeDtos";

export class PriorityTypeRepository {
  private prisma: PrismaClient;
  private mapper = ComplementaryDataMapper;

  constructor() {
    this.prisma = new PrismaClient();
    this.mapper = ComplementaryDataMapper;
  }

  async listTypeofPriority(): Promise<ListPriorityTypeResponse[] | null> {
    const result = await this.prisma.tipoPrioridade.findMany();
    return this.mapper.toListTypeofServiceResponse(result) ?? null;
  }

  async findById(id: number): Promise<ListPriorityTypeResponse | null> {
    const result = await this.prisma.tipoPrioridade.findFirst({
      where: {
        id: id,
      },
    });
    const mapper = this.mapper.toListTypeofServiceResponse([result]);
    return mapper[0] ?? null;
  }
}

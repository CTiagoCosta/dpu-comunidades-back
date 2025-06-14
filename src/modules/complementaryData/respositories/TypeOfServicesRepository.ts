import { PrismaClient } from "../../../generated/prisma";
import { ComplementaryDataMapper } from "../mappers/ComplementaryDataMapper";
import { ListTypeofServiceResponse } from "../useCase/listTypeOfService/ListTypeOfServiceDtos";

export class TypeOfServiceRepository {
  private prisma: PrismaClient;
  private mapper = ComplementaryDataMapper;

  constructor() {
    this.prisma = new PrismaClient();
    this.mapper = ComplementaryDataMapper;
  }

  async listTypeofService(): Promise<ListTypeofServiceResponse[] | null> {
    const result = await this.prisma.tipoAtendimento.findMany();
    return this.mapper.toListTypeofServiceResponse(result) ?? null;
  }

  async findById(id: number): Promise<ListTypeofServiceResponse | null> {
    const result = await this.prisma.tipoAtendimento.findFirst({
      where: {
        id: id,
      },
    });
    const mapper = this.mapper.toListTypeofServiceResponse([result]);
    return mapper[0] ?? null;
  }
}

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
}

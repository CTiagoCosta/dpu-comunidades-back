import { PrismaClient } from "../../../generated/prisma";
import { ComplementaryDataMapper } from "../mappers/ComplementaryDataMapper";
import { ListPriorityTypeResponse } from "../useCase/listPriorityType/ListPriorityTypeDtos";

export class MaritalStatusRepository {
  private prisma: PrismaClient;
  private mapper = ComplementaryDataMapper;

  constructor() {
    this.prisma = new PrismaClient();
    this.mapper = ComplementaryDataMapper;
  }

  async listAll(): Promise<ListPriorityTypeResponse[] | null> {
    const result = await this.prisma.estadoCivil.findMany();
    return this.mapper.toListMaritalStatusResponse(result) ?? null;
  }
}

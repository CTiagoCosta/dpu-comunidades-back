import { PrismaClient } from "../../../generated/prisma";
import { ComplementaryDataMapper } from "../mappers/ComplementaryDataMapper";
import { ListTypeofServiceResponse } from "../useCase/listTypeOfService/ListTypeOfServiceDtos";

export class TypeOfResidenceRepository {
  private prisma: PrismaClient;
  private mapper = ComplementaryDataMapper;

  constructor() {
    this.prisma = new PrismaClient();
    this.mapper = ComplementaryDataMapper;
  }

  async listAll(): Promise<ListTypeofServiceResponse[] | null> {
    const result = await this.prisma.tipoDomicilio.findMany();
    return this.mapper.toListTypeofServiceResponse(result) ?? null;
  }
}

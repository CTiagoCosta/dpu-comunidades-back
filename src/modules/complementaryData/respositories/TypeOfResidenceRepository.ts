import prismaClient from "../../../prisma";
import { ComplementaryDataMapper } from "../mappers/ComplementaryDataMapper";
import { ListTypeofServiceResponse } from "../useCase/listTypeOfService/ListTypeOfServiceDtos";

export class TypeOfResidenceRepository {
  private prisma = prismaClient;
  private mapper = ComplementaryDataMapper;

  constructor() {
    this.prisma = prismaClient;
    this.mapper = ComplementaryDataMapper;
  }

  async listAll(): Promise<ListTypeofServiceResponse[] | null> {
    const result = await this.prisma.tipoDomicilio.findMany();
    return this.mapper.toListTypeofServiceResponse(result) ?? null;
  }
}

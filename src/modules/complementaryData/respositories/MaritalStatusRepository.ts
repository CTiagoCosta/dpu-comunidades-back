import prismaClient from "../../../prisma";
import { ComplementaryDataMapper } from "../mappers/ComplementaryDataMapper";
import { ListPriorityTypeResponse } from "../useCase/listPriorityType/ListPriorityTypeDtos";

export class MaritalStatusRepository {
  private prisma = prismaClient;
  private mapper = ComplementaryDataMapper;

  constructor() {
    this.prisma = prismaClient;
    this.mapper = ComplementaryDataMapper;
  }

  async listAll(): Promise<ListPriorityTypeResponse[] | null> {
    const result = await this.prisma.estadoCivil.findMany();
    return this.mapper.toListMaritalStatusResponse(result) ?? null;
  }
}

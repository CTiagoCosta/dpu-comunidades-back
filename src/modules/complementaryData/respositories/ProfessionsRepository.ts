import { PrismaClient } from "../../../generated/prisma";
import { ComplementaryDataMapper } from "../mappers/ComplementaryDataMapper";
import { ListProfessionsResponse } from "../useCase/listProfessions/ListProfessionsDtos";

export class ProfessionsRepository {
  private prisma: PrismaClient;
  private mapper = ComplementaryDataMapper;

  constructor() {
    this.prisma = new PrismaClient();
    this.mapper = ComplementaryDataMapper;
  }

  async listAll(): Promise<ListProfessionsResponse[] | null> {
    const result = await this.prisma.profissao.findMany();
    return this.mapper.toListProfesionsResponse(result) ?? null;
  }
}

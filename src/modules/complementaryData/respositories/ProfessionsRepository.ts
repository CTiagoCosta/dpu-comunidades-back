import prismaClient from "../../../prisma";
import { ComplementaryDataMapper } from "../mappers/ComplementaryDataMapper";
import { ListProfessionsResponse } from "../useCase/listProfessions/ListProfessionsDtos";

export class ProfessionsRepository {
  private prisma = prismaClient;
  private mapper = ComplementaryDataMapper;

  constructor() {
    this.prisma = prismaClient;
    this.mapper = ComplementaryDataMapper;
  }

  async listAll(): Promise<ListProfessionsResponse[] | null> {
    const result = await this.prisma.profissao.findMany();
    return this.mapper.toListProfesionsResponse(result) ?? null;
  }
}

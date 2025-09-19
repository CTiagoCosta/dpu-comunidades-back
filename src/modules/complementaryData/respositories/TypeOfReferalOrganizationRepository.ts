import prismaClient from "../../../prisma";
import { ComplementaryDataMapper } from "../mappers/ComplementaryDataMapper";
import { ListTypeOfReferalOrganizationResponse } from "../useCase/listTypeOfReferalOrganization/ListTypeOfReferalOrganizationDtos";

export class TypeOfReferalOrganizationRepository {
  private prisma = prismaClient;
  private mapper = ComplementaryDataMapper;

  constructor() {
    this.prisma = prismaClient;
    this.mapper = ComplementaryDataMapper;
  }

  async listAll(): Promise<ListTypeOfReferalOrganizationResponse[] | null> {
    const result = await this.prisma.tipoOrgaoEncaminhamento.findMany({
      where: {
        ativo: true,
      },
      include: {
        OrgaoEncaminhamento: {
          select: {
            id: true,
          },
        },
      },
    });

    return this.mapper.toListTypeofReferalOrganizationResponse(result) ?? null;
  }
}

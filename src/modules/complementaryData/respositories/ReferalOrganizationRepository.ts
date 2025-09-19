import prismaClient from "../../../prisma";
import { ComplementaryDataMapper } from "../mappers/ComplementaryDataMapper";
import { ListReferalOrganizationInput, ListReferalOrganizationResponse } from "../useCase/listReferalOrganization/ListReferalOrganizationDtos";

export class ReferalOrganizationRepository {
  private prisma = prismaClient;
  private mapper = ComplementaryDataMapper;

  constructor() {
    this.prisma = prismaClient;
    this.mapper = ComplementaryDataMapper;
  }

  async listByType(
    dto: ListReferalOrganizationInput
  ): Promise<ListReferalOrganizationResponse[] | null> {
    const result = await this.prisma.orgaoEncaminhamento.findMany({
      where: {
        tipoOrgaoEncaminhamentoId: dto.typeReferalOrganization,
      },
    });

    return this.mapper.toListReferalOrganizationResponse(result) ?? null;
  }
}

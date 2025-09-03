import prismaClient from "../../../prisma";
import { ComplementaryDataMapper } from "../mappers/ComplementaryDataMapper";
import { ListRequestForLegalAssistanceResponse } from "../useCase/listRequestForLegalAssistance/ListRequestForLegalAssistanceDtos";

export class TypeOfRequestForLegalAssistance {
  private prisma = prismaClient;
  private mapper = ComplementaryDataMapper;

  constructor() {
    this.prisma = prismaClient;
    this.mapper = ComplementaryDataMapper;
  }

  async listAll(): Promise<ListRequestForLegalAssistanceResponse[] | null> {
    const result =
      await this.prisma.tipoPedidoDePrevidenciaJudiciaria.findMany();
    return this.mapper.toListRequestForLegalAssistanceResponse(result) ?? null;
  }
}

import prismaClient from "../../../prisma"; // Corrija o caminho conforme seu projeto!
import { ComplementaryDataMapper } from "../mappers/ComplementaryDataMapper";
import { ListTypeofServiceResponse } from "../useCase/listTypeOfService/ListTypeOfServiceDtos";

export class TypeOfServiceRepository {
  private prisma = prismaClient; // Use a instância singleton
  private mapper = ComplementaryDataMapper;

  async listTypeofService(): Promise<ListTypeofServiceResponse[] | null> {
    const result = await this.prisma.tipoAtendimento.findMany();
    return this.mapper.toListTypeofServiceResponse(result) ?? null;
  }

  async findById(id: number): Promise<ListTypeofServiceResponse | null> {
    const result = await this.prisma.tipoAtendimento.findFirst({
      where: { id },
    });
    const mapper = this.mapper.toListTypeofServiceResponse([result]);
    return mapper[0] ?? null;
  }
}

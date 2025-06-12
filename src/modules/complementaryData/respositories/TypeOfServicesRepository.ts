import { PrismaClient } from "@prisma/client";
import { ListTypeofServiceResponse } from "../useCase/listTypeOfService/ListTypeOfServiceDtos";

export class TypeOfServiceRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async listTypeofService(): Promise<ListTypeofServiceResponse[] | null> {
    return this.prisma.typeOfService.findMany();
  }
}

import prismaClient from "../../../prisma";
import { IServiceQueueRepository } from "../interfaces/IServiceQueueRepository";
import { CreateServiceQueueInput } from "../useCases/createServiceQueue/CreateServiceQueueDtos";
import { ListServiceQueueResponse } from "../useCases/listServiceQueue/ListServiceQueueDtos";

export class ServiceQueueRepository implements IServiceQueueRepository {
  private prisma = prismaClient;

  constructor() {
    this.prisma = prismaClient;
  }

  async create(dto: CreateServiceQueueInput): Promise<any | null> {
    const data: any = {
      nomeCompleto: dto.fullName,
      nomeSocial: dto.socialName,
      cpf: dto.cpf,
      telefone: dto.telephone,
      status: "AGUARDANDO",
      isPrioridade: dto.isPriority,
      dataEntrada: new Date(),
      dataInicio: null,
      dataFim: null,
      migrante: dto.migrante,
      operadorTriagem: {
        connect: { id: dto.screeningOperatorId },
      },
      tipoAtendimento: { connect: { id: dto.serviceTypeId } },
    };

    if (dto.prioritaryTypeId) {
      data.tipoPrioridade = { connect: { id: dto.prioritaryTypeId } };
    }

    const result = await this.prisma.filaAtendimento.create({ data });
    return result ?? null;
  }

  async listAll(): Promise<ListServiceQueueResponse[]> {
    const filas = await this.prisma.filaAtendimento.findMany({
      orderBy: { dataEntrada: "asc" } 
    });
    return filas as ListServiceQueueResponse[];
  }
}

import { FilaAtendimento, PrismaClient, User } from "../../../generated/prisma";
import { IServiceQueueRepository } from "../interfaces/IServiceQueueRepository";
import { CreateServiceQueueInput } from "../useCases/createServiceQueue/CreateServiceQueueDtos";

export class ServiceQueueRepository implements IServiceQueueRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(dto: FilaAtendimento): Promise<any | null> {
    const data: any = {
      nomeCompleto: "fulanis",
      nomeSocial: undefined,
      cpf: "06689869130",
      telefone: "6792876543",
      status: "AGUARDANDO",
      isPrioridade: false,
      dataEntrada: new Date("2025-06-14T20:56:55.442Z"),
      dataInicio: null,
      dataFim: null,
      migrante: false,
      operadorTriagem: {
        connect: { id: "97beb152-b670-473b-a6ab-ae30ad1b5008" },
      },
      tipoAtendimento: { connect: { id: 1 } },
    };

    if (dto.tipoPrioridadeId) {
      data.tipoPrioridade = { connect: { id: dto.tipoPrioridadeId } };
    }
    const result = await this.prisma.filaAtendimento.create({
      data,
    });

    return result ?? null;
  }
}

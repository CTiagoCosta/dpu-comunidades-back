import { IServiceQueueRepository } from "../interfaces/IServiceQueueRepository";
import { Triagem } from "../../../generated/prisma";
import { BaseRepository } from "../../shared/repositories/BaseRepository";

export class ServiceQueueRepository
  extends BaseRepository<Triagem>
  implements IServiceQueueRepository
{
  protected get model() {
    return this.prisma.triagem;
  }

  async create(dto: Triagem): Promise<any | null> {
    const data: any = {
      status: "AGUARDANDO",
      isPrioridade: dto.isPrioridade,
      dataEntrada: new Date(),
      operadorTriagem: {
        connect: { id: dto.operadorTriagemId },
      },
      tipoAtendimento: { connect: { id: dto.tipoAtendimentoId } },
      assistido: { connect: { id: dto.assistidoId } },
    };

    if (dto.tipoPrioridadeId) {
      data.tipoPrioridade = { connect: { id: dto.tipoPrioridadeId } };
    }

    const result = await this.model.create({ data });
    return result ?? null;
  }

  async listAll(): Promise<Triagem[] | null> {
    const filas = await this.model.findMany({
      orderBy: { dataEntrada: "asc" },
    });
    return filas as Triagem[] | null;
  }

  async findById(id: string) {
    return this.model.findUnique({
      where: { id },
      include: {
        operadorTriagem: true,
        tipoAtendimento: true,
        tipoPrioridade: true,
      },
    });
  }
}

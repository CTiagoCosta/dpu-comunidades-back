import { Assistido } from "@prisma/client";
import { BaseRepository } from "../../shared/repositories/BaseRepository";
import { IAssistedRepository } from "../interfaces/IAssistedRepository";

export class AssistedRepository
  extends BaseRepository<Assistido>
  implements IAssistedRepository
{
  protected get model() {
    return this.prisma.assistido;
  }

  async createAssisted(dto: Assistido): Promise<Assistido | null> {
    const createdAssisted = await this.model.create({
      data: dto,
    });
    return createdAssisted;
  }

  async findByCpf(cpf: string): Promise<Assistido | null> {
    const foundAssistido = await this.model.findFirst({
      where: { cpf },
    });
    return foundAssistido ?? null;
  }
}

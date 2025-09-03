import { Profissao } from "@prisma/client";
import { ComplementaryDataMapper } from "../mappers/ComplementaryDataMapper";
import { ListProfessionsResponse } from "../useCase/listProfessions/ListProfessionsDtos";
import { BaseRepository } from "../../shared/repositories/BaseRepository";

export class ProfessionsRepository extends BaseRepository<Profissao> {
  protected get model() {
    return this.prisma.profissao;
  }

  async listAll(): Promise<ListProfessionsResponse[] | null> {
    const result = await this.model.findMany();
    return ComplementaryDataMapper.toListProfesionsResponse(result) ?? null;
  }
}

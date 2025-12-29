import { IUnidadeRepository } from "../../interfaces/IUnidadeRepository";
import { ListUnidadesResponse } from "./ListUnidadesDtos";

export class ListUnidadesUseCase {
  constructor(private unidadeRepository: IUnidadeRepository) {}

  async execute(): Promise<ListUnidadesResponse> {
    const unidades = await this.unidadeRepository.findByActive();

    return {
      unidades
    };
  }
}

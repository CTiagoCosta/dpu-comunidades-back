import { ListUnidadesController } from "../../../modules/user/useCases/listUnidades/ListUnidadesController";
import { ListUnidadesUseCase } from "../../../modules/user/useCases/listUnidades/ListUnidadesUseCase";
import { UnidadeRepository } from "../../../modules/user/repositories/UnidadeRepository";

export const listUnidadesControllerFactory = (): ListUnidadesController => {
  const unidadeRepository = new UnidadeRepository();
  const useCase = new ListUnidadesUseCase(unidadeRepository);
  return new ListUnidadesController(useCase);
};

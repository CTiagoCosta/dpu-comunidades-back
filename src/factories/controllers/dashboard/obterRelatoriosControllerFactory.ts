import { ObterRelatoriosController } from "../../../modules/dashboard/controllers/ObterRelatoriosController";
import { ObterRelatoriosUseCase } from "../../../modules/dashboard/useCases/obterRelatorios/ObterRelatoriosUseCase";

export function makeObterRelatoriosController(): ObterRelatoriosController {
  const useCase = new ObterRelatoriosUseCase();
  return new ObterRelatoriosController(useCase);
}

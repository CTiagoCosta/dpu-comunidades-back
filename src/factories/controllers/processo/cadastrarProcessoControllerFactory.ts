import { CadastrarProcessoController } from "../../../modules/processo/controllers/CadastrarProcessoController";
import { CadastrarProcessoUseCase } from "../../../modules/processo/useCases/cadastrarProcesso/CadastrarProcessoUseCase";

export function makeCadastrarProcessoController(): CadastrarProcessoController {
  const useCase = new CadastrarProcessoUseCase();
  return new CadastrarProcessoController(useCase);
}

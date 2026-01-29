import { ListarProcessosController } from "../../../modules/processo/controllers/ListarProcessosController";
import { ListarProcessosUseCase } from "../../../modules/processo/useCases/listarProcessos/ListarProcessosUseCase";

export function makeListarProcessosController(): ListarProcessosController {
  const useCase = new ListarProcessosUseCase();
  return new ListarProcessosController(useCase);
}

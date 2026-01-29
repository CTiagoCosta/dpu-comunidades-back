import { ListarAtendimentosConcluidosController } from "../../../modules/processo/controllers/ListarAtendimentosConcluidosController";
import { ListarAtendimentosConcluidosUseCase } from "../../../modules/processo/useCases/listarAtendimentosConcluidos/ListarAtendimentosConcluidosUseCase";

export function makeListarAtendimentosConcluidosController(): ListarAtendimentosConcluidosController {
  const useCase = new ListarAtendimentosConcluidosUseCase();
  return new ListarAtendimentosConcluidosController(useCase);
}

import { ListarAtendimentosController } from "./ListarAtendimentosController";
import { ListarAtendimentosUseCase } from "./ListarAtendimentosUseCase";

export function makeListarAtendimentosController(): ListarAtendimentosController {
  const listarAtendimentosUseCase = new ListarAtendimentosUseCase();
  const listarAtendimentosController = new ListarAtendimentosController(
    listarAtendimentosUseCase
  );
  return listarAtendimentosController;
}

import { ListarTiposDemandaController } from "../../../modules/primeiroAtendimento/controllers/ListarTiposDemandaController";
import { ListarTiposDemandaUseCase } from "../../../modules/primeiroAtendimento/useCases/listarTiposDemanda/ListarTiposDemandaUseCase";

export const makeListarTiposDemandaController = (): ListarTiposDemandaController => {
  const listarTiposDemandaUseCase = new ListarTiposDemandaUseCase();
  return new ListarTiposDemandaController(listarTiposDemandaUseCase);
};

import { BuscarPorCpfController } from "../../../modules/processo/controllers/BuscarPorCpfController";
import { BuscarPorCpfUseCase } from "../../../modules/processo/useCases/buscarPorCpf/BuscarPorCpfUseCase";

export function makeBuscarPorCpfController(): BuscarPorCpfController {
  const useCase = new BuscarPorCpfUseCase();
  return new BuscarPorCpfController(useCase);
}

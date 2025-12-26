import { SaveRetornoDemandaJudicialController } from "../../../modules/atendimento/useCases/saveRetornoDemandaJudicial/SaveRetornoDemandaJudicialController";
import { SaveRetornoDemandaJudicialUseCase } from "../../../modules/atendimento/useCases/saveRetornoDemandaJudicial/SaveRetornoDemandaJudicialUseCase";

export function makeSaveRetornoDemandaJudicialController(): SaveRetornoDemandaJudicialController {
  const useCase = new SaveRetornoDemandaJudicialUseCase();
  return new SaveRetornoDemandaJudicialController(useCase);
}

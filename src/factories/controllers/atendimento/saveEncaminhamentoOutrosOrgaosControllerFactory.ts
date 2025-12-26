import { SaveEncaminhamentoOutrosOrgaosController } from "../../../modules/atendimento/controller/encaminhamentoOutrosOrgaos/SaveEncaminhamentoOutrosOrgaosController";
import { SaveEncaminhamentoOutrosOrgaosUseCase } from "../../../modules/atendimento/useCases/saveEncaminhamentoOutrosOrgaos/SaveEncaminhamentoOutrosOrgaosUseCase";

export function makeSaveEncaminhamentoOutrosOrgaosController(): SaveEncaminhamentoOutrosOrgaosController {
  const useCase = new SaveEncaminhamentoOutrosOrgaosUseCase();
  return new SaveEncaminhamentoOutrosOrgaosController(useCase);
}

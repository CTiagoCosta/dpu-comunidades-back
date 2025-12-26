import { SaveOrientacaoJuridicaController } from "../../../modules/atendimento/useCases/saveOrientacaoJuridica/SaveOrientacaoJuridicaController";
import { SaveOrientacaoJuridicaUseCase } from "../../../modules/atendimento/useCases/saveOrientacaoJuridica/SaveOrientacaoJuridicaUseCase";

export function makeSaveOrientacaoJuridicaController(): SaveOrientacaoJuridicaController {
  const useCase = new SaveOrientacaoJuridicaUseCase();
  return new SaveOrientacaoJuridicaController(useCase);
}

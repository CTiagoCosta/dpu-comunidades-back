import { PrimeiroAtendimentoRoutes } from "../../routes/primeiroAtendimento.routes";
import { makeIniciarPrimeiroAtendimentoController } from "../controllers/primeiroAtendimento/iniciarPrimeiroAtendimentoControllerFactory";
import { makeObterEstadoAtendimentoController } from "../controllers/primeiroAtendimento/obterEstadoAtendimentoControllerFactory";
import { makeSalvarCapacidadeCivilController } from "../controllers/primeiroAtendimento/salvarCapacidadeCivilControllerFactory";
import { makeSalvarComplementoDadosController } from "../controllers/primeiroAtendimento/salvarComplementoDadosControllerFactory";
import { makeSalvarRepresentanteLegalController } from "../controllers/primeiroAtendimento/salvarRepresentanteLegalControllerFactory";
import { makeSalvarAnaliseRendaController } from "../controllers/primeiroAtendimento/salvarAnaliseRendaControllerFactory";
import { makeSalvarTipoDemandaController } from "../controllers/primeiroAtendimento/salvarTipoDemandaControllerFactory";
import { makeSalvarFormularioBeneficioController } from "../controllers/primeiroAtendimento/salvarFormularioBeneficioControllerFactory";
import { makeSalvarViabilidadeController } from "../controllers/primeiroAtendimento/salvarViabilidadeControllerFactory";
import { makeSalvarDocumentosController } from "../controllers/primeiroAtendimento/salvarDocumentosControllerFactory";
import { makeFinalizarPrimeiroAtendimentoController } from "../controllers/primeiroAtendimento/finalizarPrimeiroAtendimentoControllerFactory";
import { makeSuspenderAtendimentoController } from "../controllers/primeiroAtendimento/suspenderAtendimentoControllerFactory";
import { makeRetomarAtendimentoController } from "../controllers/primeiroAtendimento/retomarAtendimentoControllerFactory";
import { makeListarTiposDemandaController } from "../controllers/primeiroAtendimento/listarTiposDemandaControllerFactory";
import { makeListarAtendimentosController } from "../../modules/primeiroAtendimento/useCases/listarAtendimentos/listarAtendimentosControllerFactory";

export const makePrimeiroAtendimentoRoutes = (): PrimeiroAtendimentoRoutes => {
  return new PrimeiroAtendimentoRoutes(
    makeIniciarPrimeiroAtendimentoController(),
    makeObterEstadoAtendimentoController(),
    makeSalvarCapacidadeCivilController(),
    makeSalvarComplementoDadosController(),
    makeSalvarRepresentanteLegalController(),
    makeSalvarAnaliseRendaController(),
    makeSalvarTipoDemandaController(),
    makeSalvarFormularioBeneficioController(),
    makeSalvarViabilidadeController(),
    makeSalvarDocumentosController(),
    makeFinalizarPrimeiroAtendimentoController(),
    makeSuspenderAtendimentoController(),
    makeRetomarAtendimentoController(),
    makeListarTiposDemandaController(),
    makeListarAtendimentosController()
  );
};

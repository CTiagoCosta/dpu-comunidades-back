import { ProcessoRoutes } from "../../routes/processo.routes";
import { makeListarAtendimentosConcluidosController } from "../controllers/processo/listarAtendimentosConcluidosControllerFactory";
import { makeBuscarPorCpfController } from "../controllers/processo/buscarPorCpfControllerFactory";
import { makeCadastrarProcessoController } from "../controllers/processo/cadastrarProcessoControllerFactory";
import { makeListarProcessosController } from "../controllers/processo/listarProcessosControllerFactory";

export const makeProcessoRoutes = (): ProcessoRoutes => {
  return new ProcessoRoutes(
    makeListarAtendimentosConcluidosController(),
    makeBuscarPorCpfController(),
    makeCadastrarProcessoController(),
    makeListarProcessosController()
  );
};

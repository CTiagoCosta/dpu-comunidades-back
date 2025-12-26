import { Router } from "express";
import { Route } from "../infra/Route";
import { adaptRoute } from "../infra/adapters/expressRouteAdapter";
import { authenticate } from "../modules/auth/middleware/authMiddleware";
import { makeSaveRetornoDemandaJudicialController } from "../factories/controllers/atendimento/saveRetornoDemandaJudicialControllerFactory";
import { makeSaveOrientacaoJuridicaController } from "../factories/controllers/atendimento/saveOrientacaoJuridicaControllerFactory";
import { makeSaveEncaminhamentoOutrosOrgaosController } from "../factories/controllers/atendimento/saveEncaminhamentoOutrosOrgaosControllerFactory";
import { finalizarAtendimentoControllerFactory } from "../factories/controllers/atendimento/finalizarAtendimentoControllerFactory";

export class AtendimentoRoutes implements Route {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  getRouter(): Router {
    // Retorno de demanda judicial
    this.router.post(
      "/:atendimentoId/retorno-demanda-judicial",
      authenticate,
      adaptRoute(makeSaveRetornoDemandaJudicialController())
    );

    // Orientação jurídica
    this.router.post(
      "/:atendimentoId/orientacao-juridica",
      authenticate,
      adaptRoute(makeSaveOrientacaoJuridicaController())
    );

    // Encaminhamento a outros órgãos
    this.router.post(
      "/:atendimentoId/encaminhamento-outros-orgaos",
      authenticate,
      adaptRoute(makeSaveEncaminhamentoOutrosOrgaosController())
    );

    // Finalizar atendimento
    this.router.post(
      "/:atendimentoId/finalizar",
      authenticate,
      adaptRoute(finalizarAtendimentoControllerFactory())
    );

    return this.router;
  }
}

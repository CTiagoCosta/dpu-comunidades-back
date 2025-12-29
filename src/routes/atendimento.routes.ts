import { Router } from "express";
import { Route } from "../infra/Route";
import { adaptRoute } from "../infra/adapters/expressRouteAdapter";
import { authenticate } from "../modules/auth/middleware/authMiddleware";
import { makeSaveRetornoDemandaJudicialController } from "../factories/controllers/atendimento/saveRetornoDemandaJudicialControllerFactory";
import { makeSaveOrientacaoJuridicaController } from "../factories/controllers/atendimento/saveOrientacaoJuridicaControllerFactory";
import { makeSaveEncaminhamentoOutrosOrgaosController } from "../factories/controllers/atendimento/saveEncaminhamentoOutrosOrgaosControllerFactory";
import { finalizarAtendimentoControllerFactory } from "../factories/controllers/atendimento/finalizarAtendimentoControllerFactory";
import { getMyAtendimentosController } from "../modules/atendimento/useCases/getMyAtendimentos";

export class AtendimentoRoutes implements Route {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  getRouter(): Router {
    this.router.get("/my-atendimentos", authenticate, async (req, res) => {
      await getMyAtendimentosController.handle(req, res);
    });

    this.router.post("/:atendimentoId/retorno-demanda-judicial", authenticate, adaptRoute(makeSaveRetornoDemandaJudicialController()));
    this.router.post("/:atendimentoId/orientacao-juridica", authenticate, adaptRoute(makeSaveOrientacaoJuridicaController()));
    this.router.post("/:atendimentoId/encaminhamento-outros-orgaos", authenticate, adaptRoute(makeSaveEncaminhamentoOutrosOrgaosController()));
    this.router.post("/:atendimentoId/finalizar", authenticate, adaptRoute(finalizarAtendimentoControllerFactory()));

    return this.router;
  }
}

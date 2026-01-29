import { Router } from "express";
import { Route } from "../infra/Route";
import { authenticate } from "../modules/auth/middleware/authMiddleware";
import { ObterEstatisticasController } from "../modules/dashboard/controllers/ObterEstatisticasController";
import { ObterRelatoriosController } from "../modules/dashboard/controllers/ObterRelatoriosController";

export class DashboardRoutes implements Route {
  private router: Router;

  constructor(
    private obterEstatisticasController: ObterEstatisticasController,
    private obterRelatoriosController: ObterRelatoriosController
  ) {
    this.router = Router();
  }

  getRouter(): Router {
    this.router.get(
      "/estatisticas",
      authenticate,
      async (req, res) => {
        await this.obterEstatisticasController.handle(req, res);
      }
    );

    this.router.get(
      "/relatorios",
      authenticate,
      async (req, res) => {
        await this.obterRelatoriosController.handle(req, res);
      }
    );

    return this.router;
  }
}

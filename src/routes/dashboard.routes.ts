import { Router } from "express";
import { Route } from "../infra/Route";
import { authenticate } from "../modules/auth/middleware/authMiddleware";
import { ObterEstatisticasController } from "../modules/dashboard/controllers/ObterEstatisticasController";

export class DashboardRoutes implements Route {
  private router: Router;

  constructor(private obterEstatisticasController: ObterEstatisticasController) {
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

    return this.router;
  }
}

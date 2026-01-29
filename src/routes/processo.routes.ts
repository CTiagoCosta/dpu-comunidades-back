import { Router } from "express";
import { Route } from "../infra/Route";
import { authenticate } from "../modules/auth/middleware/authMiddleware";
import { ListarAtendimentosConcluidosController } from "../modules/processo/controllers/ListarAtendimentosConcluidosController";
import { BuscarPorCpfController } from "../modules/processo/controllers/BuscarPorCpfController";
import { CadastrarProcessoController } from "../modules/processo/controllers/CadastrarProcessoController";
import { ListarProcessosController } from "../modules/processo/controllers/ListarProcessosController";

export class ProcessoRoutes implements Route {
  private router: Router;

  constructor(
    private listarAtendimentosConcluidosController: ListarAtendimentosConcluidosController,
    private buscarPorCpfController: BuscarPorCpfController,
    private cadastrarProcessoController: CadastrarProcessoController,
    private listarProcessosController: ListarProcessosController
  ) {
    this.router = Router();
  }

  getRouter(): Router {
    this.router.get(
      "/atendimentos-concluidos",
      authenticate,
      async (req, res) => {
        await this.listarAtendimentosConcluidosController.handle(req, res);
      }
    );

    this.router.get(
      "/buscar-por-cpf/:cpf",
      authenticate,
      async (req, res) => {
        await this.buscarPorCpfController.handle(req, res);
      }
    );

    this.router.post(
      "/cadastrar",
      authenticate,
      async (req, res) => {
        await this.cadastrarProcessoController.handle(req, res);
      }
    );

    this.router.get(
      "/listar",
      authenticate,
      async (req, res) => {
        await this.listarProcessosController.handle(req, res);
      }
    );

    return this.router;
  }
}

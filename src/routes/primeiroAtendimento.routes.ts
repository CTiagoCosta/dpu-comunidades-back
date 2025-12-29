import { Router } from "express";
import { Route } from "../infra/Route";
import { authenticate } from "../modules/auth/middleware/authMiddleware";
import { IniciarPrimeiroAtendimentoController } from "../modules/primeiroAtendimento/controllers/IniciarPrimeiroAtendimentoController";
import { ObterEstadoAtendimentoController } from "../modules/primeiroAtendimento/controllers/ObterEstadoAtendimentoController";
import { SalvarCapacidadeCivilController } from "../modules/primeiroAtendimento/controllers/SalvarCapacidadeCivilController";
import { SalvarComplementoDadosController } from "../modules/primeiroAtendimento/controllers/SalvarComplementoDadosController";
import { SalvarRepresentanteLegalController } from "../modules/primeiroAtendimento/controllers/SalvarRepresentanteLegalController";
import { SalvarAnaliseRendaController } from "../modules/primeiroAtendimento/controllers/SalvarAnaliseRendaController";
import { SalvarTipoDemandaController } from "../modules/primeiroAtendimento/controllers/SalvarTipoDemandaController";
import { SalvarFormularioBeneficioController } from "../modules/primeiroAtendimento/controllers/SalvarFormularioBeneficioController";
import { SalvarViabilidadeController } from "../modules/primeiroAtendimento/controllers/SalvarViabilidadeController";
import { SalvarDocumentosController } from "../modules/primeiroAtendimento/controllers/SalvarDocumentosController";
import { FinalizarAtendimentoController } from "../modules/primeiroAtendimento/controllers/FinalizarAtendimentoController";
import { SuspenderAtendimentoController } from "../modules/primeiroAtendimento/controllers/SuspenderAtendimentoController";
import { RetomarAtendimentoController } from "../modules/primeiroAtendimento/controllers/RetomarAtendimentoController";
import { ListarTiposDemandaController } from "../modules/primeiroAtendimento/controllers/ListarTiposDemandaController";
import { ListarAtendimentosController } from "../modules/primeiroAtendimento/useCases/listarAtendimentos/ListarAtendimentosController";

export class PrimeiroAtendimentoRoutes implements Route {
  private router: Router;

  constructor(
    private iniciarPrimeiroAtendimentoController: IniciarPrimeiroAtendimentoController,
    private obterEstadoAtendimentoController: ObterEstadoAtendimentoController,
    private salvarCapacidadeCivilController: SalvarCapacidadeCivilController,
    private salvarComplementoDadosController: SalvarComplementoDadosController,
    private salvarRepresentanteLegalController: SalvarRepresentanteLegalController,
    private salvarAnaliseRendaController: SalvarAnaliseRendaController,
    private salvarTipoDemandaController: SalvarTipoDemandaController,
    private salvarFormularioBeneficioController: SalvarFormularioBeneficioController,
    private salvarViabilidadeController: SalvarViabilidadeController,
    private salvarDocumentosController: SalvarDocumentosController,
    private finalizarAtendimentoController: FinalizarAtendimentoController,
    private suspenderAtendimentoController: SuspenderAtendimentoController,
    private retomarAtendimentoController: RetomarAtendimentoController,
    private listarTiposDemandaController: ListarTiposDemandaController,
    private listarAtendimentosController: ListarAtendimentosController
  ) {
    this.router = Router();
  }

  getRouter(): Router {
    // Listar todos os atendimentos (com filtros)
    this.router.get(
      "/atendimentos",
      authenticate,
      async (req, res) => {
        await this.listarAtendimentosController.handle(req, res);
      }
    );

    // Listar tipos de demanda previdenciária
    this.router.get(
      "/tipos-demanda",
      authenticate,
      async (req, res) => {
        await this.listarTiposDemandaController.handle(req, res);
      }
    );

    // Iniciar primeiro atendimento (por filaId)
    this.router.post(
      "/:filaId/iniciar",
      authenticate,
      async (req, res) => {
        await this.iniciarPrimeiroAtendimentoController.handle(req, res);
      }
    );

    // Obter estado atual do atendimento (por filaId)
    this.router.get(
      "/:filaId",
      authenticate,
      async (req, res) => {
        await this.obterEstadoAtendimentoController.handle(req, res);
      }
    );

    // Salvar etapa de Capacidade Civil
    this.router.post(
      "/:id/etapas/capacidade-civil",
      authenticate,
      async (req, res) => {
        await this.salvarCapacidadeCivilController.handle(req, res);
      }
    );

    // Salvar etapa de Complemento de Dados
    this.router.post(
      "/:id/etapas/complemento-dados",
      authenticate,
      async (req, res) => {
        await this.salvarComplementoDadosController.handle(req, res);
      }
    );

    // Salvar etapa de Representante Legal
    this.router.post(
      "/:id/etapas/representante-legal",
      authenticate,
      async (req, res) => {
        await this.salvarRepresentanteLegalController.handle(req, res);
      }
    );

    // Salvar etapa de Análise de Renda
    this.router.post(
      "/:id/etapas/analise-renda",
      authenticate,
      async (req, res) => {
        await this.salvarAnaliseRendaController.handle(req, res);
      }
    );

    // Salvar etapa de Tipo de Demanda Previdenciária
    this.router.post(
      "/:id/etapas/tipo-demanda",
      authenticate,
      async (req, res) => {
        await this.salvarTipoDemandaController.handle(req, res);
      }
    );

    // Salvar etapa de Formulário de Benefício
    this.router.post(
      "/:id/etapas/formulario-beneficio",
      authenticate,
      async (req, res) => {
        await this.salvarFormularioBeneficioController.handle(req, res);
      }
    );

    // Salvar etapa de Viabilidade da Demanda
    this.router.post(
      "/:id/etapas/viabilidade",
      authenticate,
      async (req, res) => {
        await this.salvarViabilidadeController.handle(req, res);
      }
    );

    // Salvar etapa de Documentos Obrigatórios
    this.router.post(
      "/:id/etapas/documentos",
      authenticate,
      async (req, res) => {
        await this.salvarDocumentosController.handle(req, res);
      }
    );

    // Finalizar atendimento
    this.router.post(
      "/:id/finalizar",
      authenticate,
      async (req, res) => {
        await this.finalizarAtendimentoController.handle(req, res);
      }
    );

    // Suspender atendimento
    this.router.post(
      "/:id/suspender",
      authenticate,
      async (req, res) => {
        await this.suspenderAtendimentoController.handle(req, res);
      }
    );

    // Retomar atendimento suspenso
    this.router.post(
      "/:id/retomar",
      authenticate,
      async (req, res) => {
        await this.retomarAtendimentoController.handle(req, res);
      }
    );

    return this.router;
  }
}

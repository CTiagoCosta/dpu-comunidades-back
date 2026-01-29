import { Request, Response } from "express";
import { ListarAtendimentosUseCase } from "./ListarAtendimentosUseCase";
import { ListarAtendimentosRequest } from "./ListarAtendimentosDtos";

export class ListarAtendimentosController {
  constructor(private listarAtendimentosUseCase: ListarAtendimentosUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { status, operadorId, cpf, dataInicio, dataFim, pagina, limite } =
        request.query;

      // Construir request do UseCase
      const useCaseRequest: ListarAtendimentosRequest = {};

      // Validar e converter status
      if (status) {
        const statusStr = String(status).toUpperCase();
        if (
          ["EM_ATENDIMENTO", "CONCLUIDO", "SUSPENSO", "TODOS"].includes(
            statusStr
          )
        ) {
          useCaseRequest.status = statusStr as
            | "EM_ATENDIMENTO"
            | "CONCLUIDO"
            | "SUSPENSO"
            | "TODOS";
        }
      }

      // Adicionar operadorId se fornecido
      if (operadorId) {
        useCaseRequest.operadorId = String(operadorId);
      }

      // Adicionar cpf se fornecido
      if (cpf) {
        useCaseRequest.cpf = String(cpf);
      }

      // Adicionar dataInicio se fornecida
      if (dataInicio) {
        useCaseRequest.dataInicio = String(dataInicio);
      }

      // Adicionar dataFim se fornecida
      if (dataFim) {
        useCaseRequest.dataFim = String(dataFim);
      }

      // Converter pagina para número
      if (pagina) {
        const paginaNum = parseInt(String(pagina), 10);
        if (!isNaN(paginaNum) && paginaNum > 0) {
          useCaseRequest.pagina = paginaNum;
        }
      }

      // Converter limite para número
      if (limite) {
        const limiteNum = parseInt(String(limite), 10);
        if (!isNaN(limiteNum) && limiteNum > 0 && limiteNum <= 100) {
          useCaseRequest.limite = limiteNum;
        }
      }

      console.log(
        "[ListarAtendimentosController] Parâmetros recebidos:",
        useCaseRequest
      );

      // Executar UseCase
      const result = await this.listarAtendimentosUseCase.execute(
        useCaseRequest
      );

      console.log(
        `[ListarAtendimentosController] Retornando ${result.atendimentos.length} atendimentos de ${result.total} total`
      );

      return response.status(200).json(result);
    } catch (error) {
      console.error("[ListarAtendimentosController] Erro:", error);

      return response.status(500).json({
        code: "INTERNAL_SERVER_ERROR",
        message: "Erro ao listar atendimentos",
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }
}

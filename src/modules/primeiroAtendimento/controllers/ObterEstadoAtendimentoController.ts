import { Request, Response } from "express";
import { ObterEstadoAtendimentoUseCase } from "../useCases/obterEstadoAtendimento/ObterEstadoAtendimentoUseCase";

export class ObterEstadoAtendimentoController {
  constructor(
    private obterEstadoAtendimentoUseCase: ObterEstadoAtendimentoUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { filaId } = request.params;
      const operadorId = (request as any).user?.id;

      if (!operadorId) {
        return response.status(401).json({
          error: {
            code: "UNAUTHORIZED",
            message: "Usuário não autenticado",
          },
        });
      }

      const result = await this.obterEstadoAtendimentoUseCase.execute({
        filaId,
        operadorId,
      });

      if (!result) {
        return response.status(404).json({
          error: {
            code: "NOT_FOUND",
            message: "Atendimento não encontrado",
          },
        });
      }

      return response.status(200).json(result);
    } catch (error: any) {
      if (error.message.includes("não encontrado")) {
        return response.status(404).json({
          error: {
            code: "NOT_FOUND",
            message: error.message,
          },
        });
      }

      if (error.message.includes("não autorizado")) {
        return response.status(403).json({
          error: {
            code: "FORBIDDEN",
            message: error.message,
          },
        });
      }

      console.error("Erro ao obter estado do atendimento:", error);
      return response.status(500).json({
        error: {
          code: "INTERNAL_ERROR",
          message: "Erro interno do servidor",
        },
      });
    }
  }
}

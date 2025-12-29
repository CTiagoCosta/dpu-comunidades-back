import { Request, Response } from "express";
import { FinalizarAtendimentoUseCase } from "../useCases/finalizarAtendimento/FinalizarAtendimentoUseCase";

export class FinalizarAtendimentoController {
  constructor(
    private finalizarAtendimentoUseCase: FinalizarAtendimentoUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const operadorId = (request as any).user?.id;

      if (!operadorId) {
        return response.status(401).json({
          error: {
            code: "UNAUTHORIZED",
            message: "Usuário não autenticado",
          },
        });
      }

      const result = await this.finalizarAtendimentoUseCase.execute({
        primeiroAtendimentoId: id,
        operadorId,
      });

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

      if (error.message.includes("não pode ser finalizado")) {
        return response.status(400).json({
          error: {
            code: "VALIDATION_ERROR",
            message: error.message,
          },
        });
      }

      console.error("Erro ao finalizar atendimento:", error);
      return response.status(500).json({
        error: {
          code: "INTERNAL_ERROR",
          message: "Erro interno do servidor",
        },
      });
    }
  }
}

import { Request, Response } from "express";
import { SuspenderAtendimentoUseCase } from "../useCases/suspenderAtendimento/SuspenderAtendimentoUseCase";

export class SuspenderAtendimentoController {
  constructor(
    private suspenderAtendimentoUseCase: SuspenderAtendimentoUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { motivoSuspensao } = request.body;

      const result = await this.suspenderAtendimentoUseCase.execute({
        primeiroAtendimentoId: id,
        motivoSuspensao,
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

      if (
        error.message.includes("já foi concluído") ||
        error.message.includes("cancelado") ||
        error.message.includes("já está suspenso")
      ) {
        return response.status(400).json({
          error: {
            code: "VALIDATION_ERROR",
            message: error.message,
          },
        });
      }

      console.error("Erro ao suspender atendimento:", error);
      return response.status(500).json({
        error: {
          code: "INTERNAL_ERROR",
          message: "Erro interno do servidor",
        },
      });
    }
  }
}

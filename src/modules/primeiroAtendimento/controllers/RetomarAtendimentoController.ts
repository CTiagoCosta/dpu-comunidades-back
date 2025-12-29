import { Request, Response } from "express";
import { RetomarAtendimentoUseCase } from "../useCases/retomarAtendimento/RetomarAtendimentoUseCase";

export class RetomarAtendimentoController {
  constructor(
    private retomarAtendimentoUseCase: RetomarAtendimentoUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const result = await this.retomarAtendimentoUseCase.execute({
        primeiroAtendimentoId: id,
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

      console.error("Erro ao retomar atendimento:", error);
      return response.status(500).json({
        error: {
          code: "INTERNAL_ERROR",
          message: "Erro interno do servidor",
        },
      });
    }
  }
}

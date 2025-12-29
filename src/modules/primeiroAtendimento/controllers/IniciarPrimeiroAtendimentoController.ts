import { Request, Response } from "express";
import { IniciarPrimeiroAtendimentoUseCase } from "../useCases/iniciarPrimeiroAtendimento/IniciarPrimeiroAtendimentoUseCase";

export class IniciarPrimeiroAtendimentoController {
  constructor(
    private iniciarPrimeiroAtendimentoUseCase: IniciarPrimeiroAtendimentoUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { filaId } = request.params;
      const { operadorId } = request.body;

      const operadorIdFinal = operadorId || (request as any).user?.id;

      if (!operadorIdFinal) {
        return response.status(400).json({
          error: {
            code: "VALIDATION_ERROR",
            message: "operadorId é obrigatório",
          },
        });
      }

      const result = await this.iniciarPrimeiroAtendimentoUseCase.execute({
        filaId,
        operadorId: operadorIdFinal,
      });

      return response.status(201).json(result);
    } catch (error: any) {
      if (error.message.includes("não encontrada")) {
        return response.status(404).json({
          error: {
            code: "NOT_FOUND",
            message: error.message,
          },
        });
      }

      console.error("Erro ao iniciar primeiro atendimento:", error);
      return response.status(500).json({
        error: {
          code: "INTERNAL_ERROR",
          message: "Erro interno do servidor",
        },
      });
    }
  }
}

import { Request, Response } from "express";
import { SalvarCapacidadeCivilUseCase } from "../useCases/salvarCapacidadeCivil/SalvarCapacidadeCivilUseCase";

export class SalvarCapacidadeCivilController {
  constructor(
    private salvarCapacidadeCivilUseCase: SalvarCapacidadeCivilUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { capacidadeCivil, concluirEtapa } = request.body;
      const operadorId = (request as any).user?.id;

      if (!operadorId) {
        return response.status(401).json({
          error: {
            code: "UNAUTHORIZED",
            message: "Usuário não autenticado",
          },
        });
      }

      if (typeof capacidadeCivil !== "boolean") {
        return response.status(400).json({
          error: {
            code: "VALIDATION_ERROR",
            message: "capacidadeCivil deve ser um valor booleano",
          },
        });
      }

      const result = await this.salvarCapacidadeCivilUseCase.execute({
        primeiroAtendimentoId: id,
        capacidadeCivil,
        concluirEtapa: concluirEtapa ?? true,
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

      if (error.message.includes("já foi concluída")) {
        return response.status(400).json({
          error: {
            code: "VALIDATION_ERROR",
            message: error.message,
          },
        });
      }

      console.error("Erro ao salvar capacidade civil:", error);
      return response.status(500).json({
        error: {
          code: "INTERNAL_ERROR",
          message: "Erro interno do servidor",
        },
      });
    }
  }
}

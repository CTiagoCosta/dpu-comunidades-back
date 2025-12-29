import { Request, Response } from "express";
import { GetUserStatisticsUseCase } from "./GetUserStatisticsUseCase";
import { GetUserStatisticsRequest } from "./GetUserStatisticsDtos";

export class GetUserStatisticsController {
  constructor(private getUserStatisticsUseCase: GetUserStatisticsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const userId = (request as any).user?.id; // Corrigido: usar .id ao invés de .userId

      if (!userId) {
        return response.status(401).json({
          data: null,
          success: false,
          message: "Usuário não autenticado",
          errors: []
        });
      }

      const dto: GetUserStatisticsRequest = { userId };

      const result = await this.getUserStatisticsUseCase.execute(dto);

      return response.status(200).json({
        data: result,
        success: true,
        message: "Estatísticas obtidas com sucesso",
        errors: []
      });
    } catch (error: any) {
      console.error("[GetUserStatisticsController] Erro ao obter estatísticas:", error);

      return response.status(500).json({
        data: null,
        success: false,
        message: error.message || "Erro ao obter estatísticas",
        errors: [error.message]
      });
    }
  }
}

import { Request, Response } from "express";
import { GetRecentActivitiesUseCase } from "./GetRecentActivitiesUseCase";
import { GetRecentActivitiesRequest } from "./GetRecentActivitiesDtos";

export class GetRecentActivitiesController {
  constructor(private getRecentActivitiesUseCase: GetRecentActivitiesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const userId = (request as any).user?.id;

      if (!userId) {
        return response.status(401).json({
          data: null,
          success: false,
          message: "Usuário não autenticado",
          errors: []
        });
      }

      const limit = request.query.limit ? parseInt(request.query.limit as string) : 10;
      const dto: GetRecentActivitiesRequest = { userId, limit };
      const result = await this.getRecentActivitiesUseCase.execute(dto);

      return response.status(200).json({
        data: result.activities,
        success: true,
        message: "Atividades recentes obtidas com sucesso",
        errors: []
      });
    } catch (error: any) {
      console.error("[GetRecentActivitiesController] Erro ao obter atividades:", error);

      return response.status(500).json({
        data: null,
        success: false,
        message: error.message || "Erro ao obter atividades recentes",
        errors: [error.message]
      });
    }
  }
}

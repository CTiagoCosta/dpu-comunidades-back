import { Request, Response } from "express";
import { GetMyAtendimentosUseCase } from "./GetMyAtendimentosUseCase";
import { GetMyAtendimentosRequest } from "./GetMyAtendimentosDtos";

export class GetMyAtendimentosController {
  constructor(private getMyAtendimentosUseCase: GetMyAtendimentosUseCase) {}

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

      const dto: GetMyAtendimentosRequest = { userId };
      const result = await this.getMyAtendimentosUseCase.execute(dto);

      return response.status(200).json({
        data: result,
        success: true,
        message: "Atendimentos obtidos com sucesso",
        errors: []
      });
    } catch (error: any) {
      console.error("[GetMyAtendimentosController] Erro ao obter atendimentos:", error);

      return response.status(500).json({
        data: null,
        success: false,
        message: error.message || "Erro ao obter atendimentos",
        errors: [error.message]
      });
    }
  }
}

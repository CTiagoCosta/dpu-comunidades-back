import { Request, Response } from "express";
import { ObterEstatisticasUseCase } from "../useCases/obterEstatisticas/ObterEstatisticasUseCase";

export class ObterEstatisticasController {
  constructor(private obterEstatisticasUseCase: ObterEstatisticasUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const estatisticas = await this.obterEstatisticasUseCase.execute();

      return response.status(200).json({
        data: estatisticas,
        success: true,
        message: "Estatísticas obtidas com sucesso",
        errors: []
      });
    } catch (error: any) {
      console.error("[ObterEstatisticasController] Erro ao obter estatísticas:", error);

      return response.status(500).json({
        data: null,
        success: false,
        message: "Erro ao obter estatísticas",
        errors: [error.message]
      });
    }
  }
}

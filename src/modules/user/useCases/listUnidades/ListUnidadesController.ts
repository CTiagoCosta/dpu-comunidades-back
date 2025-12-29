import { Request, Response } from "express";
import { ListUnidadesUseCase } from "./ListUnidadesUseCase";

export class ListUnidadesController {
  constructor(private listUnidadesUseCase: ListUnidadesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const result = await this.listUnidadesUseCase.execute();

      return response.status(200).json({
        data: result.unidades,
        success: true,
        message: "Unidades listadas com sucesso",
        errors: []
      });
    } catch (error: any) {
      console.error("[ListUnidadesController] Erro ao listar unidades:", error);

      return response.status(500).json({
        data: null,
        success: false,
        message: "Erro ao listar unidades",
        errors: [error.message]
      });
    }
  }
}

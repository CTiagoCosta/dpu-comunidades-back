import { Request, Response } from "express";
import { ListarProcessosUseCase } from "../useCases/listarProcessos/ListarProcessosUseCase";

export class ListarProcessosController {
  constructor(private useCase: ListarProcessosUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this.useCase.execute();

      return res.status(200).json({
        success: true,
        data: result,
        message: "Processos listados com sucesso",
      });
    } catch (error: any) {
      console.error("[ListarProcessos] Erro:", error);
      return res.status(500).json({
        success: false,
        data: null,
        message: error.message || "Erro ao listar processos",
      });
    }
  }
}

import { Request, Response } from "express";
import { ListarTiposDemandaUseCase } from "../useCases/listarTiposDemanda/ListarTiposDemandaUseCase";

export class ListarTiposDemandaController {
  constructor(
    private listarTiposDemandaUseCase: ListarTiposDemandaUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const tiposDemanda = await this.listarTiposDemandaUseCase.execute();

      return res.status(200).json({
        success: true,
        data: tiposDemanda,
      });
    } catch (error: any) {
      console.error("[ListarTiposDemandaController] Erro:", error);

      return res.status(500).json({
        success: false,
        error: {
          code: "INTERNAL_ERROR",
          message: error.message || "Erro ao listar tipos de demanda",
        },
      });
    }
  }
}

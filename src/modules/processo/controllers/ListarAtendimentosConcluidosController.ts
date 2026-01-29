import { Request, Response } from "express";
import { ListarAtendimentosConcluidosUseCase } from "../useCases/listarAtendimentosConcluidos/ListarAtendimentosConcluidosUseCase";

export class ListarAtendimentosConcluidosController {
  constructor(private useCase: ListarAtendimentosConcluidosUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this.useCase.execute();

      return res.status(200).json({
        success: true,
        data: result,
        message: "Atendimentos concluídos listados com sucesso",
      });
    } catch (error: any) {
      console.error("[ListarAtendimentosConcluidos] Erro:", error);
      return res.status(500).json({
        success: false,
        data: null,
        message: error.message || "Erro ao listar atendimentos concluídos",
      });
    }
  }
}

import { Request, Response } from "express";
import { ObterRelatoriosUseCase } from "../useCases/obterRelatorios/ObterRelatoriosUseCase";

export class ObterRelatoriosController {
  constructor(private useCase: ObterRelatoriosUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { periodo = "7dias", tipoAtendimento = "todos" } = req.query;

      const validPeriodos = ["7dias", "30dias", "90dias", "ano"];
      const periodoValidado = validPeriodos.includes(periodo as string)
        ? (periodo as "7dias" | "30dias" | "90dias" | "ano")
        : "7dias";

      const result = await this.useCase.execute({
        periodo: periodoValidado,
        tipoAtendimento: tipoAtendimento as string,
      });

      return res.status(200).json({
        success: true,
        data: result,
        message: "Relatórios obtidos com sucesso",
      });
    } catch (error: any) {
      console.error("[ObterRelatorios] Erro:", error);
      return res.status(500).json({
        success: false,
        data: null,
        message: error.message || "Erro ao obter relatórios",
      });
    }
  }
}

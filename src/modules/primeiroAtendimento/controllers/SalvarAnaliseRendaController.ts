import { Request, Response } from "express";
import { SalvarAnaliseRendaUseCase } from "../useCases/salvarAnaliseRenda/SalvarAnaliseRendaUseCase";

export class SalvarAnaliseRendaController {
  constructor(private salvarAnaliseRendaUseCase: SalvarAnaliseRendaUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id: primeiroAtendimentoId } = req.params;
      const operadorId = (req as any).userId;

      const {
        possuiRenda,
        valorRendaFamiliar,
        quantidadePessoas,
        rendaPerCapita,
        observacoes,
        concluirEtapa,
      } = req.body;

      if (typeof possuiRenda !== "boolean") {
        return res.status(400).json({
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Campo 'possuiRenda' é obrigatório e deve ser booleano",
          },
        });
      }

      const result = await this.salvarAnaliseRendaUseCase.execute({
        primeiroAtendimentoId,
        operadorId,
        possuiRenda,
        valorRendaFamiliar,
        quantidadePessoas,
        rendaPerCapita,
        observacoes,
        concluirEtapa,
      });

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error: any) {
      console.error("[SalvarAnaliseRendaController] Erro:", error);

      if (error.message.includes("não encontrado")) {
        return res.status(404).json({
          success: false,
          error: { code: "NOT_FOUND", message: error.message },
        });
      }

      if (error.message.includes("não autorizado")) {
        return res.status(403).json({
          success: false,
          error: { code: "FORBIDDEN", message: error.message },
        });
      }

      if (error.message.includes("deve ser concluída antes")) {
        return res.status(400).json({
          success: false,
          error: { code: "PREREQUISITE_NOT_MET", message: error.message },
        });
      }

      return res.status(500).json({
        success: false,
        error: {
          code: "INTERNAL_ERROR",
          message: error.message || "Erro ao salvar análise de renda",
        },
      });
    }
  }
}

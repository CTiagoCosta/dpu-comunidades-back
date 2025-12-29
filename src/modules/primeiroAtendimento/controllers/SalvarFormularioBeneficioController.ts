import { Request, Response } from "express";
import { SalvarFormularioBeneficioUseCase } from "../useCases/salvarFormularioBeneficio/SalvarFormularioBeneficioUseCase";

export class SalvarFormularioBeneficioController {
  constructor(
    private salvarFormularioBeneficioUseCase: SalvarFormularioBeneficioUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id: primeiroAtendimentoId } = req.params;
      const operadorId = (req as any).user?.id;

      console.log("[SalvarFormularioBeneficioController] operadorId:", operadorId);
      console.log("[SalvarFormularioBeneficioController] primeiroAtendimentoId:", primeiroAtendimentoId);

      const { tipoBeneficio, dados, concluirEtapa } = req.body;

      // Validações
      if (!tipoBeneficio) {
        return res.status(400).json({
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Tipo de benefício é obrigatório",
          },
        });
      }

      if (!dados || typeof dados !== "object") {
        return res.status(400).json({
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Dados do formulário são obrigatórios",
          },
        });
      }

      const result = await this.salvarFormularioBeneficioUseCase.execute({
        primeiroAtendimentoId,
        operadorId,
        tipoBeneficio,
        dados,
        concluirEtapa,
      });

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error: any) {
      console.error("[SalvarFormularioBeneficioController] Erro:", error);

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

      if (error.message.includes("não reconhecido")) {
        return res.status(400).json({
          success: false,
          error: { code: "INVALID_BENEFIT_TYPE", message: error.message },
        });
      }

      return res.status(500).json({
        success: false,
        error: {
          code: "INTERNAL_ERROR",
          message: error.message || "Erro ao salvar formulário de benefício",
        },
      });
    }
  }
}

import { Request, Response } from "express";
import { SalvarTipoDemandaUseCase } from "../useCases/salvarTipoDemanda/SalvarTipoDemandaUseCase";

export class SalvarTipoDemandaController {
  constructor(private salvarTipoDemandaUseCase: SalvarTipoDemandaUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id: primeiroAtendimentoId } = req.params;
      const operadorId = (req as any).user?.id;

      console.log("[SalvarTipoDemandaController] operadorId:", operadorId);
      console.log("[SalvarTipoDemandaController] primeiroAtendimentoId:", primeiroAtendimentoId);

      const { tipoDemandaPrevidenciariaId, concluirEtapa } = req.body;

      // Validações
      if (!tipoDemandaPrevidenciariaId) {
        return res.status(400).json({
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Tipo de demanda previdenciária é obrigatório",
          },
        });
      }

      const result = await this.salvarTipoDemandaUseCase.execute({
        primeiroAtendimentoId,
        operadorId,
        tipoDemandaPrevidenciariaId: Number(tipoDemandaPrevidenciariaId),
        concluirEtapa,
      });

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error: any) {
      console.error("[SalvarTipoDemandaController] Erro:", error);

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
          message: error.message || "Erro ao salvar tipo de demanda",
        },
      });
    }
  }
}

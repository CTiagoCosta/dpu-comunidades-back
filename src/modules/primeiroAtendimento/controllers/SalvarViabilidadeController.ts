import { Request, Response } from "express";
import { SalvarViabilidadeUseCase } from "../useCases/salvarViabilidade/SalvarViabilidadeUseCase";

export class SalvarViabilidadeController {
  constructor(private salvarViabilidadeUseCase: SalvarViabilidadeUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id: primeiroAtendimentoId } = req.params;
      const operadorId = (req as any).user?.id;

      const {
        viabilidadeDemanda,
        fundamentacaoViabilidade,
        observacoes,
        competenciaJudicial,
        dataInicioBeneficio,
        parcelasVencidas,
        valorCausa,
        processosAndamento,
        numeroProcesso,
        concluirEtapa,
      } = req.body;

      console.log("[SalvarViabilidadeController] req.body:", req.body);
      console.log("[SalvarViabilidadeController] viabilidadeDemanda:", viabilidadeDemanda);

      const result = await this.salvarViabilidadeUseCase.execute({
        primeiroAtendimentoId,
        operadorId,
        viabilidadeDemanda,
        fundamentacaoViabilidade,
        observacoes,
        competenciaJudicial,
        dataInicioBeneficio,
        parcelasVencidas,
        valorCausa,
        processosAndamento,
        numeroProcesso,
        concluirEtapa,
      });

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error: any) {
      console.error("[SalvarViabilidadeController] Erro:", error);

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

      if (error.message.includes("deve ser uma das opções")) {
        return res.status(400).json({
          success: false,
          error: { code: "INVALID_VALUE", message: error.message },
        });
      }

      return res.status(500).json({
        success: false,
        error: {
          code: "INTERNAL_ERROR",
          message: error.message || "Erro ao salvar viabilidade da demanda",
        },
      });
    }
  }
}

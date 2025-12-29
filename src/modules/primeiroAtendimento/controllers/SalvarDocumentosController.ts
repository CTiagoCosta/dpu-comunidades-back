import { Request, Response } from "express";
import { SalvarDocumentosUseCase } from "../useCases/salvarDocumentos/SalvarDocumentosUseCase";

export class SalvarDocumentosController {
  constructor(private salvarDocumentosUseCase: SalvarDocumentosUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id: primeiroAtendimentoId } = req.params;
      const operadorId = (req as any).user?.id;

      const {
        documentosApresentados,
        documentosFaltantes,
        observacoes,
        concluirEtapa,
      } = req.body;

      console.log("[SalvarDocumentosController] req.body:", req.body);

      const apresentados = typeof documentosApresentados === 'string' 
        ? documentosApresentados 
        : Array.isArray(documentosApresentados) 
        ? documentosApresentados.join(", ") 
        : null;

      const result = await this.salvarDocumentosUseCase.execute({
        primeiroAtendimentoId,
        operadorId,
        documentosApresentados: apresentados,
        documentosFaltantes,
        observacoes,
        concluirEtapa,
      });

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error: any) {
      console.error("[SalvarDocumentosController] Erro:", error);

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
          message: error.message || "Erro ao salvar documentos obrigatórios",
        },
      });
    }
  }
}

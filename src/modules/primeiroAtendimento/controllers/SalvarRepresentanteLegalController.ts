import { Request, Response } from "express";
import { SalvarRepresentanteLegalUseCase } from "../useCases/salvarRepresentanteLegal/SalvarRepresentanteLegalUseCase";

export class SalvarRepresentanteLegalController {
  constructor(private salvarRepresentanteLegalUseCase: SalvarRepresentanteLegalUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id: primeiroAtendimentoId } = req.params;
      const operadorId = (req as any).user?.id;

      if (!operadorId) {
        return res.status(401).json({
          success: false,
          error: {
            code: "UNAUTHORIZED",
            message: "Usuário não autenticado",
          },
        });
      }

      const {
        nomeRepresentante,
        cpfRepresentante,
        telefoneRepresentante,
        grauParentesco,
        concluirEtapa,
      } = req.body;

      // Validações
      if (!nomeRepresentante || !cpfRepresentante || !grauParentesco) {
        return res.status(400).json({
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message:
              "Nome, CPF e grau de parentesco do representante são obrigatórios",
          },
        });
      }

      const result = await this.salvarRepresentanteLegalUseCase.execute({
        primeiroAtendimentoId,
        operadorId,
        nomeRepresentante,
        cpfRepresentante,
        telefoneRepresentante,
        grauParentesco,
        concluirEtapa,
      });

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error: any) {
      console.error("[SalvarRepresentanteLegalController] Erro:", error);

      if (error.message.includes("não encontrado")) {
        return res.status(404).json({
          success: false,
          error: {
            code: "NOT_FOUND",
            message: error.message,
          },
        });
      }

      if (error.message.includes("não autorizado")) {
        return res.status(403).json({
          success: false,
          error: {
            code: "FORBIDDEN",
            message: error.message,
          },
        });
      }

      if (error.message.includes("deve ser concluída antes")) {
        return res.status(400).json({
          success: false,
          error: {
            code: "PREREQUISITE_NOT_MET",
            message: error.message,
          },
        });
      }

      return res.status(500).json({
        success: false,
        error: {
          code: "INTERNAL_ERROR",
          message: error.message || "Erro ao salvar representante legal",
        },
      });
    }
  }
}

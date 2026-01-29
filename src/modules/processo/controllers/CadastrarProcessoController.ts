import { Request, Response } from "express";
import { CadastrarProcessoUseCase } from "../useCases/cadastrarProcesso/CadastrarProcessoUseCase";

export class CadastrarProcessoController {
  constructor(private useCase: CadastrarProcessoUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const {
        primeiroAtendimentoId,
        numeroProcesso,
        resultado,
        resultadoDetalhado,
        valoresAtrasados,
        beneficios,
      } = req.body;

      if (!primeiroAtendimentoId) {
        return res.status(400).json({
          success: false,
          data: null,
          message: "ID do primeiro atendimento é obrigatório",
        });
      }

      if (!numeroProcesso) {
        return res.status(400).json({
          success: false,
          data: null,
          message: "Número do processo é obrigatório",
        });
      }

      if (!resultado) {
        return res.status(400).json({
          success: false,
          data: null,
          message: "Resultado é obrigatório",
        });
      }

      const result = await this.useCase.execute({
        primeiroAtendimentoId,
        numeroProcesso,
        resultado,
        resultadoDetalhado,
        valoresAtrasados,
        beneficios,
      });

      return res.status(201).json({
        success: true,
        data: result,
        message: "Processo cadastrado com sucesso",
      });
    } catch (error: any) {
      console.error("[CadastrarProcesso] Erro:", error);
      return res.status(500).json({
        success: false,
        data: null,
        message: error.message || "Erro ao cadastrar processo",
      });
    }
  }
}

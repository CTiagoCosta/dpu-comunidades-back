import { Request, Response } from "express";
import { BuscarPorCpfUseCase } from "../useCases/buscarPorCpf/BuscarPorCpfUseCase";

export class BuscarPorCpfController {
  constructor(private useCase: BuscarPorCpfUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { cpf } = req.params;

      if (!cpf) {
        return res.status(400).json({
          success: false,
          data: null,
          message: "CPF é obrigatório",
        });
      }

      const result = await this.useCase.execute({ cpf });

      return res.status(200).json({
        success: true,
        data: result,
        message: result.encontrado
          ? "Atendimento encontrado"
          : "Nenhum atendimento concluído encontrado com este CPF",
      });
    } catch (error: any) {
      console.error("[BuscarPorCpf] Erro:", error);
      return res.status(500).json({
        success: false,
        data: null,
        message: error.message || "Erro ao buscar atendimento",
      });
    }
  }
}

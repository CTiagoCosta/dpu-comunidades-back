
import { Request, Response } from "express";
import { GetServiceQueueByIdUseCase } from "./GetServiceQueueByIdUseCase";

export class GetServiceQueueByIdController {
  constructor(private useCase: GetServiceQueueByIdUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          data: null,
          success: false,
          message: "ID obrigatório",
          errors: []
        });
      }

      const fila = await this.useCase.handle(id);

      if (!fila) {
        return res.status(404).json({
          data: null,
          success: false,
          message: "Assistido não encontrado.",
          errors: []
        });
      }

      return res.status(200).json({
        data: fila,
        success: true,
        message: "Assistido encontrado com sucesso",
        errors: []
      });
    } catch (err: any) {
      return res.status(500).json({
        data: null,
        success: false,
        message: "Erro ao buscar assistido",
        errors: [{ name: err.name, message: err.message }]
      });
    }
  }
}

// src/modules/serviceQueue/useCases/listServiceQueue/ListServiceQueueController.ts

import { Request, Response } from "express";
import { ListServiceQueueUseCase } from "./ListServiceQueueUseCase";
import { ServiceQueueRepository } from "../../repositories/ServiceQueueRepository";

export class ListServiceQueueController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const repository = new ServiceQueueRepository();
      const useCase = new ListServiceQueueUseCase(repository);

      const filas = await useCase.handle();

      return res.status(200).json({
        data: filas,
        success: true,
        message: "Assistidos encontrados com sucesso",
        errors: []
      });
    } catch (err: any) {
      return res.status(500).json({
        data: null,
        success: false,
        message: "Erro ao buscar assistidos",
        errors: [{ name: err.name, message: err.message }]
      });
    }
  }
}

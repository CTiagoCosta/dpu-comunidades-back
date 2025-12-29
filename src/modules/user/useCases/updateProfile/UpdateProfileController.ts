import { Request, Response } from "express";
import { UpdateProfileContract } from "./UpdateProfileContract";
import { UpdateProfileUseCase } from "./UpdateProfileUseCase";
import { UpdateProfileRequest } from "./UpdateProfileDtos";

export class UpdateProfileController {
  constructor(
    private contract: UpdateProfileContract,
    private updateProfileUseCase: UpdateProfileUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { nome, email, telefone, cargo, unidadeId } = request.body;
      const userId = (request as any).user?.id;

      if (!userId) {
        return response.status(401).json({
          data: null,
          success: false,
          message: "Usuário não autenticado",
          errors: []
        });
      }

      const dto: UpdateProfileRequest = {
        userId,
        nome,
        email,
        telefone,
        cargo,
        unidadeId
      };

      // Validar dados
      const isValid = this.contract.validate(dto);
      if (!isValid) {
        return response.status(400).json({
          data: null,
          success: false,
          message: "Dados inválidos",
          errors: this.contract.reports
        });
      }

      const result = await this.updateProfileUseCase.execute(dto);

      return response.status(200).json({
        data: result.user,
        success: true,
        message: "Perfil atualizado com sucesso",
        errors: []
      });
    } catch (error: any) {
      console.error("[UpdateProfileController] Erro ao atualizar perfil:", error);

      return response.status(500).json({
        data: null,
        success: false,
        message: error.message || "Erro ao atualizar perfil",
        errors: [error.message]
      });
    }
  }
}

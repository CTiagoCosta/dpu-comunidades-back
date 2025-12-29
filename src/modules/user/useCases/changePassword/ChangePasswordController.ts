import { Request, Response } from "express";
import { ChangePasswordContract } from "./ChangePasswordContract";
import { ChangePasswordUseCase } from "./ChangePasswordUseCase";
import { ChangePasswordRequest } from "./ChangePasswordDtos";

export class ChangePasswordController {
  constructor(
    private contract: ChangePasswordContract,
    private changePasswordUseCase: ChangePasswordUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { currentPassword, newPassword } = request.body;
      const userId = (request as any).user?.id; // Corrigido: usar .id ao invés de .userId

      if (!userId) {
        return response.status(401).json({
          data: null,
          success: false,
          message: "Usuário não autenticado",
          errors: []
        });
      }

      const dto: ChangePasswordRequest = {
        userId,
        currentPassword,
        newPassword
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

      const result = await this.changePasswordUseCase.execute(dto);

      return response.status(200).json({
        data: result,
        success: true,
        message: result.message,
        errors: []
      });
    } catch (error: any) {
      console.error("[ChangePasswordController] Erro ao alterar senha:", error);

      const statusCode = error.message === "Senha atual incorreta" ? 400 : 500;

      return response.status(statusCode).json({
        data: null,
        success: false,
        message: error.message || "Erro ao alterar senha",
        errors: [error.message]
      });
    }
  }
}

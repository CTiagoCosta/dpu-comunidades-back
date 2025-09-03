import {
  BaseController,
  ValidateResponse,
} from "../../../../infra/BaseController";
import { HandleResponse } from "../../../../infra/HandleResponse";
import { HttpRequest, HttpResponse } from "../../../../infra/HttpAdapter";
import { CreateUserContract } from "./CreateUserContract";
import { CreateUserInput } from "./CreateUserDtos";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController extends BaseController {
  constructor(
    private contract: CreateUserContract,
    private useCase: CreateUserUseCase
  ) {
    super("Erro ao criar novo usuário");
  }

  protected validateRequest(
    request: HttpRequest
  ): ValidateResponse | undefined {
    if (!this.contract.validate(this.getDto(request))) {
      return {
        message: this.defaultErrorMessage,
        reports: this.contract.reports,
      };
    }
  }

  protected async specificImplementation(
    request: HttpRequest
  ): Promise<HttpResponse> {
    const result = await this.useCase.handler(this.getDto(request));

    return HandleResponse.success(result, "Usuário criado com sucesso");
  }

  private getDto(request: HttpRequest): CreateUserInput {
    return {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
      roleId: request.body.roleId
    };
  }
}

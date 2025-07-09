import {
  BaseController,
  ValidateResponse,
} from "../../../../infra/BaseController";
import { HandleResponse } from "../../../../infra/HandleResponse";
import { HttpRequest, HttpResponse } from "../../../../infra/HttpAdapter";
import { LoginContract } from "./LoginContract";
import { LoginInput } from "./LoginDtos";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController extends BaseController {
  constructor(private contract: LoginContract, private useCase: LoginUseCase) {
    super("Erro ao realizar login");
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

    return HandleResponse.success(result, "Sucesso ao logar usuário.");
  }

  private getDto(request: HttpRequest): LoginInput {
    return {
      email: request.body.email,
      password: request.body.password,
    };
  }
}

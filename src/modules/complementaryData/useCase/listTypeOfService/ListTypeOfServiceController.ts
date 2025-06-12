import {
  BaseController,
  ValidateResponse,
} from "../../../../infra/BaseController";
import { HandleResponse } from "../../../../infra/HandleResponse";
import { HttpRequest, HttpResponse } from "../../../../infra/HttpAdapter";
import { ComplementaryDataServices } from "../../services/ComplementaryDataServices";

export class ListTypeOfServiceController extends BaseController {
  constructor(private complementaryDataServices: ComplementaryDataServices) {
    super("Erro ao criar novo usuário");
  }

  protected validateRequest(
    request: HttpRequest
  ): ValidateResponse | undefined {
    return undefined;
  }

  protected async specificImplementation(
    request: HttpRequest
  ): Promise<HttpResponse> {
    // const result = await this.createUserUseCase.handler(this.getCreateUserDto(request));

    // if ('refreshToken' in result) {
    //   return HandleResponse.cookies(result, 'Conta criada com sucesso.', [
    //     { key: 'refreshToken', value: result.refreshToken }
    //   ]);
    // }

    return HandleResponse.success("s", "Conta criada com sucesso.");
  }
}

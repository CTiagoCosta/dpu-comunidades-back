import {
  BaseController,
  ValidateResponse,
} from "../../../../infra/BaseController";
import { HandleResponse } from "../../../../infra/HandleResponse";
import { HttpRequest, HttpResponse } from "../../../../infra/HttpAdapter";
import { ComplementaryDataServices } from "../../services/ComplementaryDataServices";

export class ListTypeOfServiceController extends BaseController {
  constructor(private complementaryDataServices: ComplementaryDataServices) {
    super("Ocorreu um erro ao listar tipos de serviço");
  }

  protected validateRequest(
    request: HttpRequest
  ): ValidateResponse | undefined {
    return undefined;
  }

  protected async specificImplementation(
    request: HttpRequest
  ): Promise<HttpResponse> {
    const result = await this.complementaryDataServices.listTypeofService();

    return HandleResponse.success(result, "Sucesso ao listar tipos de serviço");
  }
}

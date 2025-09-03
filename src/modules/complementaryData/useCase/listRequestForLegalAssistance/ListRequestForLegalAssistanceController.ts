import {
  BaseController,
  ValidateResponse,
} from "../../../../infra/BaseController";
import { HandleResponse } from "../../../../infra/HandleResponse";
import { HttpRequest, HttpResponse } from "../../../../infra/HttpAdapter";
import { IComplementaryDataServices } from "../../interfaces/IComplementaryDataServices";

export class ListRequestForLegalAssistanceController extends BaseController {
  constructor(private complementaryDataServices: IComplementaryDataServices) {
    super("Ocorreu um erro ao listar os tipos de assistência jurídica");
  }

  protected validateRequest(
    request: HttpRequest
  ): ValidateResponse | undefined {
    return undefined;
  }

  protected async specificImplementation(
    request: HttpRequest
  ): Promise<HttpResponse> {
    const result = await this.complementaryDataServices.listRequestForLegalAssistance();

    return HandleResponse.success(result, "Sucesso ao listar tipo de assistência jurídica");
  }
}

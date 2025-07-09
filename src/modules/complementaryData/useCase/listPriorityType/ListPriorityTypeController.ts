import {
  BaseController,
  ValidateResponse,
} from "../../../../infra/BaseController";
import { HandleResponse } from "../../../../infra/HandleResponse";
import { HttpRequest, HttpResponse } from "../../../../infra/HttpAdapter";
import { ComplementaryDataServices } from "../../services/ComplementaryDataServices";

export class ListPriorityTypeController extends BaseController {
  constructor(private complementaryDataServices: ComplementaryDataServices) {
    super("Ocorreu um erro ao listar tipos de prioridade");
  }

  protected validateRequest(
    request: HttpRequest
  ): ValidateResponse | undefined {
    return undefined;
  }

  protected async specificImplementation(
    request: HttpRequest
  ): Promise<HttpResponse> {
    const result = await this.complementaryDataServices.listTypeofPriority();

    return HandleResponse.success(
      result,
      "Sucesso ao listar tipos de prioridade"
    );
  }
}

import {
  BaseController,
  ValidateResponse,
} from "../../../../infra/BaseController";
import { HandleResponse } from "../../../../infra/HandleResponse";
import { HttpRequest, HttpResponse } from "../../../../infra/HttpAdapter";
import { ComplementaryDataServices } from "../../services/ComplementaryDataServices";

export class ListTypeOfReferalOrganizationController extends BaseController {
  constructor(private complementaryDataServices: ComplementaryDataServices) {
    super("Ocorreu um erro ao listar os tipos de organizações de encaminhamento");
  }

  protected validateRequest(
    request: HttpRequest
  ): ValidateResponse | undefined {
    return undefined;
  }

  protected async specificImplementation(
    request: HttpRequest
  ): Promise<HttpResponse> {
    const result = await this.complementaryDataServices.listTypeofReferalOrganization();

    return HandleResponse.success(result, "Sucesso ao listar os dados");
  }
}

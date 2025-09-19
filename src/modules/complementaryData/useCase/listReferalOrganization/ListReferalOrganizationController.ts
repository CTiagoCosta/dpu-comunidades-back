import {
  BaseController,
  ValidateResponse,
} from "../../../../infra/BaseController";
import { HandleResponse } from "../../../../infra/HandleResponse";
import { HttpRequest, HttpResponse } from "../../../../infra/HttpAdapter";
import { ComplementaryDataServices } from "../../services/ComplementaryDataServices";
import { ListReferalOrganizationContract } from "./ListReferalOrganizationContract";
import { ListReferalOrganizationInput } from "./ListReferalOrganizationDtos";

export class ListReferalOrganizationController extends BaseController {
  private contract: ListReferalOrganizationContract;
  private complementaryDataServices: ComplementaryDataServices;

  constructor(
    complementaryDataServices: ComplementaryDataServices,
    contract: ListReferalOrganizationContract
  ) {
    super("Erro ao listar orgãos de encaminhamento");
    this.contract = contract;
    this.complementaryDataServices = complementaryDataServices;
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
    const result = await this.complementaryDataServices.listReferalOrganization(
      this.getDto(request)
    );

    return HandleResponse.success(
      result,
      "Sucesso ao listar orgãos de encaminhamento"
    );
  }

  private getDto(request: HttpRequest): ListReferalOrganizationInput {
    return {
      typeReferalOrganization: Number(request.params.typeOfReferalId),
    };
  }
}

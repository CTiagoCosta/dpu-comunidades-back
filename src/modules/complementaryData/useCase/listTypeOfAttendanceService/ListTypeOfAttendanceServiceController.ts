import {
  BaseController,
  ValidateResponse,
} from "../../../../infra/BaseController";
import { HandleResponse } from "../../../../infra/HandleResponse";
import { HttpRequest, HttpResponse } from "../../../../infra/HttpAdapter";
import { ComplementaryDataServices } from "../../services/ComplementaryDataServices";
import { ListTypeOfAttendanceServiceContract } from "./ListTypeOfAttendanceServiceContract";
import { ListTypeofAttendanceServiceInput } from "./ListTypeOfAttendanceServiceDtos";

export class ListTypeOfAttendanceServiceController extends BaseController {
  private contract: ListTypeOfAttendanceServiceContract;
  private complementaryDataServices: ComplementaryDataServices;

  constructor(
    complementaryDataServices: ComplementaryDataServices,
    contract: ListTypeOfAttendanceServiceContract
  ) {
    super("Erro ao listar tipos de serviços de atendimento");
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
    const result =
      await this.complementaryDataServices.listTypeofAttendanceService(
        this.getDto(request)
      );

    return HandleResponse.success(
      result,
      "Sucesso ao listar tipos de serviços de atendimento."
    );
  }

  private getDto(request: HttpRequest): ListTypeofAttendanceServiceInput {
    return {
      attendenceId: Number(request.params.attendenceId),
    };
  }
}

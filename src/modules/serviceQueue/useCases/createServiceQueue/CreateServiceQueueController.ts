import {
  BaseController,
  ValidateResponse,
} from "../../../../infra/BaseController";
import { HandleResponse } from "../../../../infra/HandleResponse";
import { HttpRequest, HttpResponse } from "../../../../infra/HttpAdapter";
import { CreateServiceQueueContract } from "./CreateServiceQueueContract";
import { CreateServiceQueueInput } from "./CreateServiceQueueDtos";
import { CreateServiceQueueUseCase } from "./CreateServiceQueueUseCase";

export class CreateServiceQueueController extends BaseController {
  constructor(
    private contract: CreateServiceQueueContract,
    private useCase: CreateServiceQueueUseCase
  ) {
    super("Erro ao criar nova triagem");
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
    console.log(this.getDto(request))
    const result = await this.useCase.handler(this.getDto(request));

    return HandleResponse.success(result, "Sucesso ao criar triagem.");
  }

  private getDto(request: HttpRequest): CreateServiceQueueInput {
    const { body } = request;
    return {
      fullName: body.fullName,
      socialName: body.socialName,
      cpf: body.cpf,
      telephone: body.telephone,
      migrante: body.migrante ?? false,
      isPriority: body.isPriority ?? false,
      serviceTypeId: body.serviceTypeId,
      screeningOperatorId: body.accessUser.id,
      prioritaryTypeId: body.isPriority ? body.prioritaryType : null,
    };
  }
}

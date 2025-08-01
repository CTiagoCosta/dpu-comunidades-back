import { GetServiceQueueByIdUseCase } from "./GetServiceQueueByIdUseCase";
import {
  BaseController,
  ValidateResponse,
} from "../../../../infra/BaseController";
import { HandleResponse } from "../../../../infra/HandleResponse";
import { HttpRequest, HttpResponse } from "../../../../infra/HttpAdapter";
import { GetServiceQueueByIdContract } from "./GetServiceQueueByIdContract";
import { GetServiceQueueByIdInput } from "./GetServiceQueueByIdDtos";

export class GetServiceQueueByIdController extends BaseController {
  constructor(
    private contract: GetServiceQueueByIdContract,
    private useCase: GetServiceQueueByIdUseCase
  ) {
    super("Erro ao buscar triagem");
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

    return HandleResponse.success(result, "Sucesso ao criar triagem.");
  }

  private getDto(request: HttpRequest): GetServiceQueueByIdInput {
    const { params } = request;
    return {
      queueId: params.id,
    };
  }
}

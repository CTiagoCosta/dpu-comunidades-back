import {
  BaseController,
  ValidateResponse,
} from "../../../../infra/BaseController";
import { HandleResponse } from "../../../../infra/HandleResponse";
import { HttpRequest, HttpResponse } from "../../../../infra/HttpAdapter";
import { CreateAssistedAndAddToServiceQueueContract } from "./CreateAssistedAndAddToServiceQueueContract";
import {
  CreateAssistedInput,
  CreateAssistedInputAndAddToServiceQueue,
} from "./CreateAssistedAndAddToServiceQueueDtos";
import { CreateAssistedAndAddToQueueUseCase } from "./CreateAssistedAndAddToServiceQueueUseCase";

export class CreateAssistedAndAddToServiceQueueController extends BaseController {
  constructor(
    private contract: CreateAssistedAndAddToServiceQueueContract,
    private useCase: CreateAssistedAndAddToQueueUseCase
  ) {
    super("Erro ao criar novo assistido");
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

    return HandleResponse.success(result, "Assistido criado com sucesso");
  }

  private getDto(
    request: HttpRequest
  ): CreateAssistedInputAndAddToServiceQueue {
    return {
      assisted: {
        fullName: request.body.fullName,
        socialName: request.body.socialName,
        cpf: request.body.cpf,
        cellphone: request.body.cellphone,
        isMigrant: request.body.isMigrant,
      },
      isPriority: request.body.isPriority,
      priorityTypeId: request.body.priorityTypeId,
      attendanceTypeId: request.body.attendanceTypeId,
      operatorId: request.body.accessUser.id,
    };
  }
}

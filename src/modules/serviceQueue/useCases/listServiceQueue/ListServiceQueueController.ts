// src/modules/serviceQueue/useCases/listServiceQueue/ListServiceQueueController.ts

import { ListServiceQueueUseCase } from "./ListServiceQueueUseCase";
import {
  BaseController,
  ValidateResponse,
} from "../../../../infra/BaseController";
import { HttpRequest, HttpResponse } from "../../../../infra/HttpAdapter";
import { HandleResponse } from "../../../../infra/HandleResponse";

export class ListServiceQueueController extends BaseController {
  constructor(private useCase: ListServiceQueueUseCase) {
    super("Erro ao listar fila");
  }

  protected validateRequest(
    request: HttpRequest
  ): ValidateResponse | undefined {
    return undefined;
  }

  protected async specificImplementation(
    request: HttpRequest
  ): Promise<HttpResponse> {
    const result = await this.useCase.handler();

    return HandleResponse.success(result, "Sucesso ao listar fila.");
  }
}

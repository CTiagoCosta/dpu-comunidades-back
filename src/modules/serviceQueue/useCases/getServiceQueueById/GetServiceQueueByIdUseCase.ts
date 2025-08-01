import { NotFoundError } from "../../../../infra/errors/NotFoundError";
import { IServiceQueueRepository } from "../../interfaces/IServiceQueueRepository";
import {
  GetServiceQueueByIdInput,
  GetServiceQueueByIdResponse,
} from "./GetServiceQueueByIdDtos";

export class GetServiceQueueByIdUseCase {
  constructor(private repository: IServiceQueueRepository) {}

  async handler(
    dto: GetServiceQueueByIdInput
  ): Promise<GetServiceQueueByIdResponse | null> {
    const fila = await this.repository.findByIdWithRelations(dto.queueId);
    if (!fila) {
      throw new NotFoundError("Triagem não encontrada");
    }
    return fila;
  }
}

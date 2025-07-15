import { IServiceQueueRepository } from "../../interfaces/IServiceQueueRepository";
import { GetServiceQueueByIdResponse } from "./GetServiceQueueByIdDtos";

export class GetServiceQueueByIdUseCase {
  constructor(private repository: IServiceQueueRepository) {}

  async handle(id: string): Promise<GetServiceQueueByIdResponse | null> {
    const fila = await this.repository.findByIdWithRelations(id);
    return fila;
  }
}
import { IServiceQueueRepository } from "../../interfaces/IServiceQueueRepository";
import { ListServiceQueueResponse } from "./ListServiceQueueDtos";

export class ListServiceQueueUseCase {
  constructor(private repository: IServiceQueueRepository) {}

  async handler(): Promise<ListServiceQueueResponse[]> {
    const filas = await this.repository.listAll();
    return filas;
  }
}

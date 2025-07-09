import { CreateServiceQueueInput } from "../useCases/createServiceQueue/CreateServiceQueueDtos";
import { ListServiceQueueResponse } from "../useCases/listServiceQueue/ListServiceQueueDtos";

export interface IServiceQueueRepository {
  create(dto: CreateServiceQueueInput): Promise<any | null>;

  listAll(): Promise<ListServiceQueueResponse[]>
}
 
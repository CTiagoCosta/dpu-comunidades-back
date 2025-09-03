import { Triagem } from "../../../generated/prisma";
import { CreateServiceQueueInput } from "../useCases/createServiceQueue/CreateServiceQueueDtos";

export interface IServiceQueueRepository {
  create(dto: Triagem): Promise<any | null>;
  listAll(): Promise<Triagem[] | null>;
  findById(id: string): Promise<Triagem | null>;
}

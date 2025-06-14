import { FilaAtendimento } from "../../../generated/prisma";

export interface IServiceQueueRepository {
  create(dto: FilaAtendimento): Promise<any | null>;
}

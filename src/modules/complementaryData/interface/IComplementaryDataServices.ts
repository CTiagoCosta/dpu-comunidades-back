import { ListTypeofServiceResponse } from "../useCase/listTypeOfService/ListTypeOfServiceDtos";

export interface IComplementaryDataServices {
  listTypeofService(): Promise<ListTypeofServiceResponse[] | null>;
}

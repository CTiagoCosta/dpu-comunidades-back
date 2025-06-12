import { IComplementaryDataServices } from "../interface/IComplementaryDataServices";
import { ListTypeofServiceResponse } from "../useCase/listTypeOfService/ListTypeOfServiceDtos";

export class ComplementaryDataServices implements IComplementaryDataServices {
  async listTypeofService(): Promise<ListTypeofServiceResponse[] | null> {
    // This method should interact with the database to fetch the list of types of service.
    // For now, we return null as a placeholder.
    return null;
  }
}

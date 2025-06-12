import { IComplementaryDataServices } from "../interface/IComplementaryDataServices";
import { TypeOfServiceRepository } from "../respositories/TypeOfServicesRepository";
import { ListTypeofServiceResponse } from "../useCase/listTypeOfService/ListTypeOfServiceDtos";

export class ComplementaryDataServices implements IComplementaryDataServices {
  private typeOfServiceRepository: TypeOfServiceRepository;
  constructor() {
    this.typeOfServiceRepository = new TypeOfServiceRepository();
  }
  async listTypeofService(): Promise<ListTypeofServiceResponse[] | null> {
    return await this.typeOfServiceRepository.listTypeofService();
  }
}

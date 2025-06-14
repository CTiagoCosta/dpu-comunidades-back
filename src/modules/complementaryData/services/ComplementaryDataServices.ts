import { IComplementaryDataServices } from "../interfaces/IComplementaryDataServices";
import { TypeOfAttendanceServicesRepository } from "../respositories/TypeOfAttendanceServicesRepository";
import { PriorityTypeRepository } from "../respositories/PriorityTypeRepository";
import { TypeOfServiceRepository } from "../respositories/TypeOfServicesRepository";
import { ListTypeofAttendanceServiceInput } from "../useCase/listTypeOfAttendanceService/ListTypeOfAttendanceServiceDtos";
import { ListTypeofServiceResponse } from "../useCase/listTypeOfService/ListTypeOfServiceDtos";

export class ComplementaryDataServices implements IComplementaryDataServices {
  private typeOfServiceRepository: TypeOfServiceRepository;
  private typeOfAttendanceServiceRepository: TypeOfAttendanceServicesRepository;
  private typeOfPriorityRepository: PriorityTypeRepository;
  constructor() {
    this.typeOfServiceRepository = new TypeOfServiceRepository();
    this.typeOfAttendanceServiceRepository =
      new TypeOfAttendanceServicesRepository();
    this.typeOfPriorityRepository = new PriorityTypeRepository();
  }
  async listTypeofService(): Promise<ListTypeofServiceResponse[] | null> {
    return await this.typeOfServiceRepository.listTypeofService();
  }

  async listTypeofAttendanceService(
    dto: ListTypeofAttendanceServiceInput
  ): Promise<ListTypeofServiceResponse[] | null> {
    return await this.typeOfAttendanceServiceRepository.listTypeofAttendenceService(
      dto
    );
  }

  async listTypeofPriority(): Promise<ListTypeofServiceResponse[] | null> {
    return await this.typeOfPriorityRepository.listTypeofPriority();
  }
}

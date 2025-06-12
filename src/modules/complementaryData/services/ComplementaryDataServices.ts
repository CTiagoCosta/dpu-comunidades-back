import { IComplementaryDataServices } from "../interface/IComplementaryDataServices";
import { TypeOfAttendanceServicesRepository } from "../respositories/TypeOfAttendanceServicesRepository";
import { TypeOfServiceRepository } from "../respositories/TypeOfServicesRepository";
import { ListTypeofAttendanceServiceInput } from "../useCase/listTypeOfAttendanceService/ListTypeOfAttendanceServiceDtos";
import { ListTypeofServiceResponse } from "../useCase/listTypeOfService/ListTypeOfServiceDtos";

export class ComplementaryDataServices implements IComplementaryDataServices {
  private typeOfServiceRepository: TypeOfServiceRepository;
  private typeOfAttendanceServiceRepository: TypeOfAttendanceServicesRepository;
  constructor() {
    this.typeOfServiceRepository = new TypeOfServiceRepository();
    this.typeOfAttendanceServiceRepository =
      new TypeOfAttendanceServicesRepository();
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
}

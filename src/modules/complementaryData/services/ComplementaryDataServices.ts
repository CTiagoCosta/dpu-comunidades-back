import { IComplementaryDataServices } from "../interfaces/IComplementaryDataServices";
import { TypeOfAttendanceServicesRepository } from "../respositories/TypeOfAttendanceServicesRepository";
import { PriorityTypeRepository } from "../respositories/PriorityTypeRepository";
import { TypeOfServiceRepository } from "../respositories/TypeOfServicesRepository";
import { ListTypeofAttendanceServiceInput } from "../useCase/listTypeOfAttendanceService/ListTypeOfAttendanceServiceDtos";
import { ListTypeofServiceResponse } from "../useCase/listTypeOfService/ListTypeOfServiceDtos";
import { MaritalStatusRepository } from "../respositories/MaritalStatusRepository";
import { ProfessionsRepository } from "../respositories/ProfessionsRepository";
import { TypeOfResidenceRepository } from "../respositories/TypeOfResidenceRepository";
import { TypeOfVulnerabilityRepository } from "../respositories/TypeOfVulnerabilityRepository";

export class ComplementaryDataServices implements IComplementaryDataServices {
  private typeOfServiceRepository: TypeOfServiceRepository;
  private typeOfAttendanceServiceRepository: TypeOfAttendanceServicesRepository;
  private typeOfPriorityRepository: PriorityTypeRepository;
  private maritalStatusRepositoty: MaritalStatusRepository;
  private professionsRepository: ProfessionsRepository;
  private typeOfResidenceRepository: TypeOfResidenceRepository;
  private typeOfVulnerabilityRepository: TypeOfVulnerabilityRepository;
  constructor() {
    this.typeOfServiceRepository = new TypeOfServiceRepository();
    this.typeOfAttendanceServiceRepository =
      new TypeOfAttendanceServicesRepository();
    this.typeOfPriorityRepository = new PriorityTypeRepository();
    this.maritalStatusRepositoty = new MaritalStatusRepository();
    this.professionsRepository = new ProfessionsRepository();
    this.typeOfResidenceRepository = new TypeOfResidenceRepository();
    this.typeOfVulnerabilityRepository = new TypeOfVulnerabilityRepository();
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

  async listMaritalStatus(): Promise<ListTypeofServiceResponse[] | null> {
    return await this.maritalStatusRepositoty.listAll();
  }

  async listProfessions(): Promise<ListTypeofServiceResponse[] | null> {
    return await this.professionsRepository.listAll();
  }

  async listTypeOfResidence(): Promise<ListTypeofServiceResponse[] | null> {
    return await this.typeOfResidenceRepository.listAll();
  }

  async listVulnerabilityType(): Promise<ListTypeofServiceResponse[] | null> {
    return await this.typeOfVulnerabilityRepository.listAll();
  }
}

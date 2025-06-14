import { ListMaritalStatusResponse } from "../useCase/listMaritalStatus/ListMaritalStatusDtos";
import { ListPriorityTypeResponse } from "../useCase/listPriorityType/ListPriorityTypeDtos";
import { ListProfessionsResponse } from "../useCase/listProfessions/ListProfessionsDtos";
import { ListTypeofAttendanceServiceInput } from "../useCase/listTypeOfAttendanceService/ListTypeOfAttendanceServiceDtos";
import { ListTypeOfResidenceResponse } from "../useCase/listTypeOfResidence/ListTypeOfResidenceDtos";
import { ListTypeofServiceResponse } from "../useCase/listTypeOfService/ListTypeOfServiceDtos";
import { ListVulnerabilityTypeResponse } from "../useCase/listVulnerabilityType/ListVulnerabilityTypeDtos";

export interface IComplementaryDataServices {
  listTypeofService(): Promise<ListTypeofServiceResponse[] | null>;
  listTypeofAttendanceService(
    dto: ListTypeofAttendanceServiceInput
  ): Promise<ListTypeofServiceResponse[] | null>;
  listTypeofPriority(): Promise<ListPriorityTypeResponse[] | null>;
  listMaritalStatus(): Promise<ListMaritalStatusResponse[] | null>;
  listProfessions(): Promise<ListProfessionsResponse[] | null>;
  listTypeOfResidence(): Promise<ListTypeOfResidenceResponse[] | null>;
  listVulnerabilityType(): Promise<ListVulnerabilityTypeResponse[] | null>;
}

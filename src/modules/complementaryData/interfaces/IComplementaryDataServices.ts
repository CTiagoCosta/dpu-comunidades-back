import { ListMaritalStatusResponse } from "../useCase/listMaritalStatus/ListMaritalStatusDtos";
import { ListPriorityTypeResponse } from "../useCase/listPriorityType/ListPriorityTypeDtos";
import { ListTypeofAttendanceServiceInput } from "../useCase/listTypeOfAttendanceService/ListTypeOfAttendanceServiceDtos";
import { ListTypeofServiceResponse } from "../useCase/listTypeOfService/ListTypeOfServiceDtos";

export interface IComplementaryDataServices {
  listTypeofService(): Promise<ListTypeofServiceResponse[] | null>;
  listTypeofAttendanceService(
    dto: ListTypeofAttendanceServiceInput
  ): Promise<ListTypeofServiceResponse[] | null>;
  listTypeofPriority(): Promise<ListPriorityTypeResponse[] | null>;
  listMaritalStatus(): Promise<ListMaritalStatusResponse[] | null>;
}

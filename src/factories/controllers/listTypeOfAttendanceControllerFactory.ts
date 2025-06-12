import { ComplementaryDataServices } from "../../modules/complementaryData/services/ComplementaryDataServices";
import { ListTypeOfAttendanceServiceContract } from "../../modules/complementaryData/useCase/listTypeOfAttendanceService/ListTypeOfAttendanceServiceContract";
import { ListTypeOfAttendanceServiceController } from "../../modules/complementaryData/useCase/listTypeOfAttendanceService/ListTypeOfAttendanceServiceController";

export const makeListTypeOfAttendanceController =
  (): ListTypeOfAttendanceServiceController => {
    const service = new ComplementaryDataServices();
    const contract = new ListTypeOfAttendanceServiceContract();
    return new ListTypeOfAttendanceServiceController(service, contract);
  };

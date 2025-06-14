import { ComplementaryDataServices } from "../../modules/complementaryData/services/ComplementaryDataServices";
import { ListMaritalStatusController } from "../../modules/complementaryData/useCase/listMaritalStatus/ListMaritalStatusController";

export const makeListMaritalStatusController =
  (): ListMaritalStatusController => {
    const service = new ComplementaryDataServices();
    return new ListMaritalStatusController(service);
  };

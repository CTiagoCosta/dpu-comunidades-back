import { ComplementaryDataServices } from "../../modules/complementaryData/services/ComplementaryDataServices";
import { ListTypeOfServiceController } from "../../modules/complementaryData/useCase/listTypeOfService/ListTypeOfServiceController";

export const makeListComplementaryDataController =
  (): ListTypeOfServiceController => {
    const service = new ComplementaryDataServices();
    return new ListTypeOfServiceController(service);
  };

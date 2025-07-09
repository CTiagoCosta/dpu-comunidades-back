import { ComplementaryDataServices } from "../../modules/complementaryData/services/ComplementaryDataServices";
import { ListPriorityTypeController } from "../../modules/complementaryData/useCase/listPriorityType/ListPriorityTypeController";

export const makeListTypeOfPrioritaryController =
  (): ListPriorityTypeController => {
    const service = new ComplementaryDataServices();
    return new ListPriorityTypeController(service);
  };

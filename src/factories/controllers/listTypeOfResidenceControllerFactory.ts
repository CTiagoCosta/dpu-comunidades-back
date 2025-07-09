import { ComplementaryDataServices } from "../../modules/complementaryData/services/ComplementaryDataServices";
import { ListTypeOfResidenceController } from "../../modules/complementaryData/useCase/listTypeOfResidence/ListTypeOfResidenceController";

export const makeListTypeOfResidenceController =
  (): ListTypeOfResidenceController => {
    const service = new ComplementaryDataServices();
    return new ListTypeOfResidenceController(service);
  };

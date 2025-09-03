import { ComplementaryDataServices } from "../../modules/complementaryData/services/ComplementaryDataServices";
import { ListRequestForLegalAssistanceController } from "../../modules/complementaryData/useCase/listRequestForLegalAssistance/ListRequestForLegalAssistanceController";

export const makeListTypeOfRequestForLegalAssistanceController =
  (): ListRequestForLegalAssistanceController => {
    const service = new ComplementaryDataServices();
    return new ListRequestForLegalAssistanceController(service);
  };

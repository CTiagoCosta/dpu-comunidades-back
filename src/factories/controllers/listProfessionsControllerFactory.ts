import { ComplementaryDataServices } from "../../modules/complementaryData/services/ComplementaryDataServices";
import { ListProfessionsController } from "../../modules/complementaryData/useCase/listProfessions/ListProfessionsController";

export const makeListProfessionsController = (): ListProfessionsController => {
  const service = new ComplementaryDataServices();
  return new ListProfessionsController(service);
};

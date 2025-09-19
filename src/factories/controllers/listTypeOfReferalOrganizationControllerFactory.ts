import { ComplementaryDataServices } from "../../modules/complementaryData/services/ComplementaryDataServices";
import { ListTypeOfReferalOrganizationController } from "../../modules/complementaryData/useCase/listTypeOfReferalOrganization/ListTypeOfReferalOrganizationController";

export const makeListTypeOfReferalOrganizationController =
  (): ListTypeOfReferalOrganizationController => {
    const service = new ComplementaryDataServices();
    return new ListTypeOfReferalOrganizationController(service);
  };

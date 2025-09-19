import { ComplementaryDataServices } from "../../modules/complementaryData/services/ComplementaryDataServices";
import { ListReferalOrganizationContract } from "../../modules/complementaryData/useCase/listReferalOrganization/ListReferalOrganizationContract";
import { ListReferalOrganizationController } from "../../modules/complementaryData/useCase/listReferalOrganization/ListReferalOrganizationController";

export const makeListReferalOrganizationController =
  (): ListReferalOrganizationController => {
    const service = new ComplementaryDataServices();
    const contract = new ListReferalOrganizationContract();
    return new ListReferalOrganizationController(service, contract);
  };

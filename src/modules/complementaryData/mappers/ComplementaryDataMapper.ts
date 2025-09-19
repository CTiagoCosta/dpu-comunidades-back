import { ListMaritalStatusResponse } from "../useCase/listMaritalStatus/ListMaritalStatusDtos";
import { ListProfessionsResponse } from "../useCase/listProfessions/ListProfessionsDtos";
import { ListTypeOfReferalOrganizationResponse } from "../useCase/listTypeOfReferalOrganization/ListTypeOfReferalOrganizationDtos";
import { ListRequestForLegalAssistanceResponse } from "../useCase/listRequestForLegalAssistance/ListRequestForLegalAssistanceDtos";
import { ListTypeofAttendanceServiceResponse } from "../useCase/listTypeOfAttendanceService/ListTypeOfAttendanceServiceDtos";
import { ListTypeofServiceResponse } from "../useCase/listTypeOfService/ListTypeOfServiceDtos";
import { ListVulnerabilityTypeResponse } from "../useCase/listVulnerabilityType/ListVulnerabilityTypeDtos";
import { ListReferalOrganizationResponse } from "../useCase/listReferalOrganization/ListReferalOrganizationDtos";

export abstract class ComplementaryDataMapper {
  public static toListTypeofServiceResponse(
    data: any[]
  ): ListTypeofServiceResponse[] {
    return data.map((item) => ({
      id: item.id,
      description: item.descricao,
    }));
  }

  public static toListTypeofAttendanceServiceResponse(
    data: any[]
  ): ListTypeofAttendanceServiceResponse[] {
    return data.map((item) => ({
      id: item.id,
      description: item.descricao,
      attendanceId: item.atendimentoId,
    }));
  }

  public static toListMaritalStatusResponse(
    data: any[]
  ): ListMaritalStatusResponse[] {
    return data.map((item) => ({
      id: item.id,
      description: item.descricao,
    }));
  }

  public static toListProfesionsResponse(
    data: any[]
  ): ListProfessionsResponse[] {
    return data.map((item) => ({
      id: item.id,
      description: item.descricao,
    }));
  }

  public static toListTypeofVulnerabilityServiceResponse(
    data: any[]
  ): ListVulnerabilityTypeResponse[] {
    return data.map((item) => ({
      id: item.id,
      description: item.descricao,
    }));
  }

  public static toListRequestForLegalAssistanceResponse(
    data: any[]
  ): ListRequestForLegalAssistanceResponse[] {
    return data.map((item) => ({
      id: item.id,
      description: item.descricao,
    }));
  }

  public static toListTypeofReferalOrganizationResponse(
    data: any[]
  ): ListTypeOfReferalOrganizationResponse[] {
    return data.map((item) => ({
      id: item.id,
      title: item.nome,
      description: item.descricao,
      totalOrganizations: item.OrgaoEncaminhamento
        ? item.OrgaoEncaminhamento.length
        : 0,
    }));
  }

  public static toListReferalOrganizationResponse(
    data: any[]
  ): ListReferalOrganizationResponse[] {
    return data.map((item) => ({
      id: item.id,
      name: item.nome,
    }));
  }
}

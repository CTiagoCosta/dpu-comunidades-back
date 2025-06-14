import { User } from "../../../../generated/prisma";
import { InvalidValueError } from "../../../../infra/errors/InvalidValueError";
import { PriorityTypeRepository } from "../../../complementaryData/respositories/PriorityTypeRepository";
import { TypeOfServiceRepository } from "../../../complementaryData/respositories/TypeOfServicesRepository";
import { ListPriorityTypeResponse } from "../../../complementaryData/useCase/listPriorityType/ListPriorityTypeDtos";
import { ListTypeofServiceResponse } from "../../../complementaryData/useCase/listTypeOfService/ListTypeOfServiceDtos";
import { IUserRepository } from "../../../user/interfaces/IUserRepository";
import { UserOutput } from "../../../user/useCases/createUser/CreateUserDtos";
import { ServiceQueueMapper } from "../../mappers/ServiceQueueMapper";
import { ServiceQueueRepository } from "../../repositories/ServiceQueueRepository";
import { CreateServiceQueueInput } from "./CreateServiceQueueDtos";

export class CreateServiceQueueUseCase {
  constructor(
    private userRepository: IUserRepository,
    private priorityTypeRepository: PriorityTypeRepository,
    private typeOfServiceRepository: TypeOfServiceRepository,
    private serviceQueueRepository: ServiceQueueRepository
  ) {}

  public async handler(
    createUserDto: CreateServiceQueueInput
  ): Promise<UserOutput | null> {
    await this.validate(createUserDto);

    const serviceQueueMapper = ServiceQueueMapper.toDatabase(createUserDto);

    const serviceQueueCreated = await this.serviceQueueRepository.create(
      serviceQueueMapper
    );

    return serviceQueueCreated;
  }

  private async validate(dto: CreateServiceQueueInput): Promise<void> {
    await this.validateOperator(dto.screeningOperatorId);

    dto.isPriority && (await this.validatePriorityType(dto.prioritaryTypeId));

    await this.validateServiceType(dto.serviceTypeId);
  }

  private async validatePriorityType(
    priorityId: number
  ): Promise<ListPriorityTypeResponse> {
    const priorityType = await this.priorityTypeRepository.findById(priorityId);

    if (!priorityType) {
      throw new InvalidValueError(
        "priorityType",
        "Tipo de prioridade inválida"
      );
    }

    return priorityType;
  }

  private async validateOperator(operatorId: string): Promise<User | null> {
    const operator = await this.userRepository.findById(operatorId);

    if (!operator) {
      throw new InvalidValueError(
        "screeningOperatorId",
        "Id de operador inválido"
      );
    }

    return operator;
  }

  private async validateServiceType(
    serviceId: number
  ): Promise<ListTypeofServiceResponse> {
    const service = await this.typeOfServiceRepository.findById(serviceId);

    if (!service) {
      throw new InvalidValueError("serviceTypeId", "Id de serviço inválido");
    }

    return service;
  }
}

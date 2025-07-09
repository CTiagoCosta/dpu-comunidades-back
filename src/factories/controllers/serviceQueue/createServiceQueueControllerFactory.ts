import { UserRepository } from "../../../modules/user/repositories/UserRepository";
import { CreateServiceQueueController } from "../../../modules/serviceQueue/useCases/createServiceQueue/CreateServiceQueueController";
import { CreateServiceQueueContract } from "../../../modules/serviceQueue/useCases/createServiceQueue/CreateServiceQueueContract";
import { CreateServiceQueueUseCase } from "../../../modules/serviceQueue/useCases/createServiceQueue/CreateServiceQueueUseCase";
import { PriorityTypeRepository } from "../../../modules/complementaryData/respositories/PriorityTypeRepository";
import { TypeOfServiceRepository } from "../../../modules/complementaryData/respositories/TypeOfServicesRepository";
import { ServiceQueueRepository } from "../../../modules/serviceQueue/repositories/ServiceQueueRepository";

export const makeCreateServiceQueueController =
  (): CreateServiceQueueController => {
    const contract = new CreateServiceQueueContract();

    const userRepository = new UserRepository();
    const priorityRepository = new PriorityTypeRepository();
    const typeOfServiceRepository = new TypeOfServiceRepository();
    const serviceQueueRepository = new ServiceQueueRepository();
    const useCase = new CreateServiceQueueUseCase(
      userRepository,
      priorityRepository,
      typeOfServiceRepository,
      serviceQueueRepository
    );

    return new CreateServiceQueueController(contract, useCase);
  };

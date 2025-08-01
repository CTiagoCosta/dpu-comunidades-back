import { ServiceQueueRepository } from "../../../modules/serviceQueue/repositories/ServiceQueueRepository";
import { ListServiceQueueController } from "../../../modules/serviceQueue/useCases/listServiceQueue/ListServiceQueueController";
import { ListServiceQueueUseCase } from "../../../modules/serviceQueue/useCases/listServiceQueue/ListServiceQueueUseCase";

export const makeListServiceQueueController =
  (): ListServiceQueueController => {
    const repository = new ServiceQueueRepository();
    const useCase = new ListServiceQueueUseCase(repository);
    return new ListServiceQueueController(useCase);
  };

import { ServiceQueueRepository } from "../../../modules/serviceQueue/repositories/ServiceQueueRepository";
import { GetServiceQueueByIdUseCase } from "../../../modules/serviceQueue/useCases/getServiceQueueById/GetServiceQueueByIdUseCase";
import { GetServiceQueueByIdController } from "../../../modules/serviceQueue/useCases/getServiceQueueById/GetServiceQueueByIdController";

export const makeGetServiceQueueByIdController = (): GetServiceQueueByIdController => {
  const repository = new ServiceQueueRepository();
  const useCase = new GetServiceQueueByIdUseCase(repository);
  return new GetServiceQueueByIdController(useCase);
};
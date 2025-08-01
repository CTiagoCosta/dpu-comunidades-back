import { ServiceQueueRepository } from "../../../modules/serviceQueue/repositories/ServiceQueueRepository";
import { GetServiceQueueByIdUseCase } from "../../../modules/serviceQueue/useCases/getServiceQueueById/GetServiceQueueByIdUseCase";
import { GetServiceQueueByIdController } from "../../../modules/serviceQueue/useCases/getServiceQueueById/GetServiceQueueByIdController";
import { GetServiceQueueByIdContract } from "../../../modules/serviceQueue/useCases/getServiceQueueById/GetServiceQueueByIdContract";

export const makeGetServiceQueueByIdController =
  (): GetServiceQueueByIdController => {
    const repository = new ServiceQueueRepository();
    const useCase = new GetServiceQueueByIdUseCase(repository);
    const contract = new GetServiceQueueByIdContract();
    return new GetServiceQueueByIdController(contract, useCase);
  };

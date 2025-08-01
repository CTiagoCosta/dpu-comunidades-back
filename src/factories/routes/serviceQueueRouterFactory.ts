import { ServiceQueueRoutes } from "../../routes/serviceQueue.routes";
import { makeCreateServiceQueueController } from "../controllers/serviceQueue/createServiceQueueControllerFactory";
import { makeGetServiceQueueByIdController } from "../controllers/serviceQueue/getServiceQueueByIdControllerFactory";
import { makeListServiceQueueController } from "../controllers/serviceQueue/listServiceQueueByIdControllerFactory";

export const makeServiceQueueRoutes = (): ServiceQueueRoutes => {
  return new ServiceQueueRoutes(
    makeCreateServiceQueueController(),
    makeGetServiceQueueByIdController(),
    makeListServiceQueueController()
  );
};
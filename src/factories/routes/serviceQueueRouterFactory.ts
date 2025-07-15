import { ServiceQueueRoutes } from "../../routes/serviceQueue.routes";
import { makeCreateServiceQueueController } from "../controllers/serviceQueue/createServiceQueueControllerFactory";
import { makeGetServiceQueueByIdController } from "../controllers/serviceQueue/getServiceQueueByIdControllerFactory";

export const makeServiceQueueRoutes = (): ServiceQueueRoutes => {
  return new ServiceQueueRoutes(
    makeCreateServiceQueueController(),
    makeGetServiceQueueByIdController()
  );
};
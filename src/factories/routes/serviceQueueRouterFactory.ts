import { ServiceQueueRoutes } from "../../routes/serviceQueue.routes";
import { makeCreateServiceQueueController } from "../controllers/serviceQueue/createServiceQueueControllerFactory";

export const makeServiceQueueRoutes = (): ServiceQueueRoutes => {
  return new ServiceQueueRoutes(makeCreateServiceQueueController());
};

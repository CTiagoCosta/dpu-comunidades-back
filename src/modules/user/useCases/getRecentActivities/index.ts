import { GetRecentActivitiesUseCase } from "./GetRecentActivitiesUseCase";
import { GetRecentActivitiesController } from "./GetRecentActivitiesController";

const getRecentActivitiesUseCase = new GetRecentActivitiesUseCase();
const getRecentActivitiesController = new GetRecentActivitiesController(getRecentActivitiesUseCase);

export { getRecentActivitiesController };

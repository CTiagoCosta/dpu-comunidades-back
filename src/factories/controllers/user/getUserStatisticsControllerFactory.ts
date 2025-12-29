import { GetUserStatisticsController } from "../../../modules/user/useCases/getUserStatistics/GetUserStatisticsController";
import { GetUserStatisticsUseCase } from "../../../modules/user/useCases/getUserStatistics/GetUserStatisticsUseCase";
import { UserRepository } from "../../../modules/user/repositories/UserRepository";

export const getUserStatisticsControllerFactory = (): GetUserStatisticsController => {
  const userRepository = new UserRepository();
  const useCase = new GetUserStatisticsUseCase(userRepository);
  return new GetUserStatisticsController(useCase);
};

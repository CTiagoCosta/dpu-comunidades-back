import { IUserRepository } from "../../interfaces/IUserRepository";
import { GetUserStatisticsRequest, GetUserStatisticsResponse } from "./GetUserStatisticsDtos";

export class GetUserStatisticsUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(request: GetUserStatisticsRequest): Promise<GetUserStatisticsResponse> {
    const { userId } = request;

    // Verificar se usuário existe
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    // Obter estatísticas
    const statistics = await this.userRepository.getUserStatistics(userId);

    return statistics;
  }
}

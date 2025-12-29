import { UserStatistics } from "../../interfaces/IUserRepository";

export interface GetUserStatisticsRequest {
  userId: string;
}

export interface GetUserStatisticsResponse extends UserStatistics {}

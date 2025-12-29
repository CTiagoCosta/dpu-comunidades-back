export interface GetRecentActivitiesRequest {
  userId: string;
  limit?: number;
}

export interface RecentActivity {
  id: string;
  tipo: string;
  assistido: string;
  cpf: string;
  data: Date;
  status: string;
}

export interface GetRecentActivitiesResponse {
  activities: RecentActivity[];
}

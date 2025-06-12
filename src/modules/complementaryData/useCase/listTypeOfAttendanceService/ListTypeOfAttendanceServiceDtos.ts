export interface ListTypeofAttendanceServiceInput {
  attendenceId: number;
}

export interface ListTypeofAttendanceServiceResponse {
  id: number;
  description: string;
  attendanceId: number;
}

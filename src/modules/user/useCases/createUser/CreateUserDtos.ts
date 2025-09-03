import { Role } from "../../../../generated/prisma";

export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  roleId: number;
}

export interface UserOutput {
  id: string;
  name: string;
  email: string;
  approved: boolean;
  role: Role
}

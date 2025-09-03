import { User } from "../../../generated/prisma";
import { UserWithRole } from "../type/User";
import { UserOutput } from "../useCases/createUser/CreateUserDtos";

export interface IUserRepository {
  createUser(dto: User): Promise<UserWithRole | null>;
  emailExists(email: string): Promise<boolean>;
  findByEmail(email: string): Promise<UserWithRole | null>;
  findById(id: string): Promise<UserWithRole | null>;
}

import { RoleRepository } from "../../../modules/user/repositories/RoleRepository";
import { GetRolesController } from "../../../modules/user/useCases/getRoles/GetRolesController";
import { GetRolesUseCase } from "../../../modules/user/useCases/getRoles/GetUserUseCase";

export const makeGetRolesController = (): GetRolesController => {
  const roleRepository = new RoleRepository();
  const useCase = new GetRolesUseCase(roleRepository);
  return new GetRolesController(useCase);
};

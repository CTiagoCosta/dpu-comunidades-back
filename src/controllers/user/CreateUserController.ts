import { Request, response, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { nome, email, senha, role, aprovado } = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            nome,
            email,
            senha,
            role,
            aprovado
        });
       res.json(user);
        
    }
}

export { CreateUserController };
import prismaClient from "../../prisma";
import { hash } from "bcryptjs";


interface UserRequest {
    nome: string;
    email: string;
    senha: string;
    role: string;
    aprovado: boolean;
}

class CreateUserService {
    async execute({ nome, email, senha}: UserRequest) {
       
        // Verificar se ele enviou um email
        if (!email) {
            throw new Error("Email incorreto");
        }

        // Verificar se o email já está cadastrado
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("Esse email já está em uso");
        }

        const senhaHash = await hash(senha, 8);

        const user = await prismaClient.user.create({
            data: { 
                nome: nome,
                email: email,
                senha: senhaHash
            },
            select: {
                id: true,
                nome: true,
                email: true
            }
        })

        return user;
    }
}

export { CreateUserService };
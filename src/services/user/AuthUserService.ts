import prismaClient from "../../prisma";
import { compare } from "bcryptjs"; 
import { Sign } from "crypto";
import { sign, SignOptions } from "jsonwebtoken";

interface AuthUserRequest {
    email: string;
    senha: string;
}

class AuthUserService {
    async execute({ email, senha }: AuthUserRequest) {
        // Verificar se o email já está cadastrado
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error("Esse email não existe");
        }

        // Verificar se a senha está correta
        const senhaMatch = await compare(senha, user.senha);

        if (!senhaMatch) {
            throw new Error("Senha incorreta");
        }  

        //Gerar token JWT e retornar os dados do usuário
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            throw new Error("JWT_SECRET não está definido nas variáveis de ambiente");
        }
        const token = sign(
            {
                nome: user.nome,
                email: user.email,
                role: user.role
            },
            jwtSecret,
            {
                subject: String(user.id),
                expiresIn: '1d'
            }
        );
        return {
            id: user.id,
            nome: user.nome,
            email: user.email,
            role: user.role, 
            token: token
        }

    }
}

export { AuthUserService };
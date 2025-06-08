import prismaClient from "../../prisma";
import { compare } from "bcryptjs"; 
import { sign } from "jsonwebtoken";

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
        const token = sign(
            {
                nome: user.nome,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
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
import prismaClient from "../../prisma";

interface QueueRequest {
    nomeCompleto: string;
    nomeSocial?: string;
    cpf: string;
    telefone: string;
    isPrioridade?: boolean;
    operadorTriagemId: string;
}

class CreateQueueService {
    async execute(data: QueueRequest) {
        const {
            nomeCompleto,
            nomeSocial,
            cpf,
            telefone,
            isPrioridade = false,
            operadorTriagemId,
        } = data;

        // Verifica se já existe um CPF com status ativo (não atendido ou cancelado)
        const cpfExistente = await prismaClient.filaAtendimento.findFirst({
            where: {
                cpf,
                status: {
                    notIn: ['CANCELADO', 'ATENDIDO']
                }
            }
        });

        if (cpfExistente) {
            throw new Error("Já existe uma pessoa cadastrada com esse CPF.");
        }

        const fila = await prismaClient.filaAtendimento.create({
            data: {
                nomeCompleto,
                nomeSocial,
                cpf,
                telefone,
                isPrioridade,
                status: "AGUARDANDO",
                operadorTriagemId,
            },
            select: {
                nomeCompleto: true,
                nomeSocial: true,
                cpf: true,
                telefone: true,
                isPrioridade: true,
                status: true,
                dataEntrada: true,
            },

        });

        return fila;
    }
}

export { CreateQueueService };

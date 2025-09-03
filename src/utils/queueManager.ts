// import { App } from "../app";

// // Buscar a fila de AGUARDANDO
// export async function getQueue() {
//   return await App.prisma.triagem.findMany({
//     where: { status: "AGUARDANDO" },
//     orderBy: [
//       { isPrioridade: "desc" }, // Prioridade primeiro
//       { dataEntrada: "asc" }, // Depois por ordem de chegada
//     ],
//     include: {
//       // operadorAtendimento: true,     // se quiser mostrar o jurista/operador no front
//       operadorTriagem: true, // se quiser mostrar quem cadastrou
//       tipoPrioridade: true,
//       tipoAtendimento: true,
//     },
//   });
// }

// // Adiciona novo usuário à fila
// export async function addToQueue(userData: {
//   nomeCompleto: string;
//   nomeSocial?: string;
//   cpf: string;
//   telefone: string;
//   isPrioridade?: boolean;
//   migrante?: boolean;
//   operadorTriagemId: string; // id do user que cadastrou na triagem
//   tipoPrioridadeId?: number;
//   tipoAtendimentoId: number;
// }) {
//   return await App.prisma.triagem.create({
//     data: {
//       nomeCompleto: userData.nomeCompleto,
//       nomeSocial: userData.nomeSocial,
//       cpf: userData.cpf,
//       telefone: userData.telefone,
//       isPrioridade: userData.isPrioridade ?? false,
//       status: StatusFilaAtendimento.AGUARDANDO,
//       migrante: userData.migrante ?? false,
//       operadorTriagemId: userData.operadorTriagemId,
//       tipoPrioridadeId: userData.tipoPrioridadeId,
//       tipoAtendimentoId: userData.tipoAtendimentoId,
//       dataEntrada: new Date(),
//     },
//   });
// }

// // Inicia o atendimento (jurista pega a fila)
// export async function startAttendance(
//   queueItemId: string,
//   operadorAtendimentoId: string
// ) {
//   return await App.prisma.filaAtendimento.update({
//     where: { id: queueItemId },
//     data: {
//       status: StatusFilaAtendimento.EM_ATENDIMENTO,
//       operadorAtendimentoId: operadorAtendimentoId,
//       dataInicio: new Date(),
//     },
//   });
// }

// // Finaliza atendimento
// export async function finalizeAttendance(queueItemId: string) {
//   return await App.prisma.filaAtendimento.update({
//     where: { id: queueItemId },
//     data: {
//       status: StatusFilaAtendimento.ATENDIDO,
//       dataFim: new Date(),
//     },
//   });
// }

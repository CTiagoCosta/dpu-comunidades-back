// // server.ts
// import { App } from "./app";
// import http from "http";
// import { Server as SocketIOServer } from "socket.io";
// // import { getQueue, addToQueue, startAttendance, finalizeAttendance } from "./utils/queueManager";
// import jwt from "jsonwebtoken";

// const JWT_SECRET = process.env.JWT_SECRET;

// async function bootstrap() {
//   try {
//     const application = new App();
//     await application.create();

//     const expressApp = application.getApplication();
//     const server = http.createServer(expressApp);

//     // Socket.io setup
//     // const io = new SocketIOServer(server, {
//     //   cors: {
//     //     origin: "*",
//     //     methods: ["GET", "POST"]
//     //   }
//     // });

//     // io.use((socket, next) => {
//     //   const token = socket.handshake.auth.token;
//     //   if (!token) {
//     //     return next(new Error("Token ausente"));
//     //   }
//     //   try {
//     //     const payload = jwt.verify(token, JWT_SECRET);
//     //     // Adicione info do usuário ao socket para usar nos eventos
//     //     socket.data.user = payload;
//     //     next();
//     //   } catch (err) {
//     //     next(new Error("Token inválido"));
//     //   }
//     // });

//     // // Evento de conexão
//     // io.on("connection", (socket) => {
//     //   const user = socket.data.user;
      
//     //   // Envia o estado atual da fila ao conectar
//     //   getQueue().then((queue) => {
//     //     socket.emit("queueUpdated", queue);
//     //   });

//     //   socket.on("joinQueue", async (userData, callback) => {
//     //     // Validação manual dos campos obrigatórios
//     //     if (!userData.nomeCompleto || !userData.cpf || !userData.telefone || !userData.operadorTriagemId || !userData.tipoAtendimentoId) {
//     //       return callback && callback({ success: false, message: "Campos obrigatórios faltando" });
//     //     }

//     //     try {
//     //       await addToQueue(userData);
//     //       const newQueue = await getQueue();
//     //       io.emit("queueUpdated", newQueue);
//     //       callback && callback({ success: true });
//     //     } catch (err) {
//     //       callback && callback({ success: false, message: err.message || "Erro ao adicionar à fila" });
//     //     }
//     //   });

//     //   socket.on("startAttendance", async ({ queueItemId, operadorAtendimentoId }, callback) => {
//     //     if (!queueItemId || !operadorAtendimentoId) {
//     //       return callback && callback({ success: false, message: "Campos obrigatórios faltando" });
//     //     }
//     //     try {
//     //       await startAttendance(queueItemId, operadorAtendimentoId);
//     //       const newQueue = await getQueue();
//     //       io.emit("queueUpdated", newQueue);
//     //       callback && callback({ success: true });
//     //     } catch (err) {
//     //       callback && callback({ success: false, message: err.message || "Erro ao iniciar atendimento" });
//     //     }
//     //   });

//     //   socket.on("finalizeAttendance", async ({ queueItemId }, callback) => {
//     //     if (!queueItemId) {
//     //       return callback && callback({ success: false, message: "Campos obrigatórios faltando" });
//     //     }
//     //     try {
//     //       await finalizeAttendance(queueItemId);
//     //       const newQueue = await getQueue();
//     //       io.emit("queueUpdated", newQueue);
//     //       callback && callback({ success: true });
//     //     } catch (err) {
//     //       callback && callback({ success: false, message: err.message || "Erro ao finalizar atendimento" });
//     //     }
//     //   });

//     //   socket.on("disconnect", () => {
//     //   });
//     // });

//     await application.start(server);

//   } catch (error) {
//   }
// }

// bootstrap();

import { App } from "./app";

async function bootstrap() {
  try {
    const application = new App();
    await application.create();
    await application.start();
  } catch (error) {
    console.log("[server] > error to up application: ", error);
  }
}

bootstrap();

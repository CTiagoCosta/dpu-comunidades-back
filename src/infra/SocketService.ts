import { Server as SocketIOServer } from "socket.io";
import { getQueue } from "../utils/queueManager";

export class SocketService {
  private static io: SocketIOServer | null = null;

  static setIO(io: SocketIOServer) {
    this.io = io;
  }

  static async notifyQueueUpdate() {
    if (!this.io) {
      console.warn("[SocketService] Socket.IO não está inicializado");
      return;
    }

    try {
      const newQueue = await getQueue();
      this.io.emit("queueUpdated", newQueue);
      console.log("[SocketService] Fila atualizada e notificação enviada");
    } catch (error) {
      console.error("[SocketService] Erro ao notificar atualização da fila:", error);
    }
  }
}

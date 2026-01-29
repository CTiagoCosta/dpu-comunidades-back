import express, { Application, RequestHandler } from "express";
import path from "path";
import { makeComplementaryDataRoutes } from "./factories/routes/complementaryDataRouterFactory";
import dotenvConfig from "./configs/dotenvConfig";
import { configureCors } from "./configs/corsConfig";
import configs from "./configs";
import { PrismaClient } from "./generated/prisma";
import { makeUserDataRoutes } from "./factories/routes/userDataRouterFactory";
import { makeServiceQueueRoutes } from "./factories/routes/serviceQueueRouterFactory";
import { makePrimeiroAtendimentoRoutes } from "./factories/routes/primeiroAtendimentoRouterFactory";
import { makeDashboardRoutes } from "./factories/routes/dashboardRouterFactory";
import { makeProcessoRoutes } from "./factories/routes/processoRouterFactory";

dotenvConfig();

export class App {
  private app: Application;
  public static prisma: PrismaClient;

  constructor() {
    this.app = express();
  }

  public async create() {
    await App.connectToDatabase();
    this.configureMiddleWares();
    this.configureRoutes();

    return this.app;
  }

  private configureMiddleWares() {
    this.app.use(express.json() as RequestHandler);
    this.app.use(configureCors());

    this.app.use('/uploads/profile-photos',
      express.static(path.join(__dirname, '../uploads/profile-photos'))
    );
  }

  private configureRoutes(): void {
    this.app.use(makeComplementaryDataRoutes().getRouter());
    this.app.use("/user", makeUserDataRoutes().getRouter());
    this.app.use("/service-queue", makeServiceQueueRoutes().getRouter());
    this.app.use("/atendimento", new (require("./routes/atendimento.routes").AtendimentoRoutes)().getRouter());
    this.app.use("/primeiro-atendimento", makePrimeiroAtendimentoRoutes().getRouter());
    this.app.use("/dashboard", makeDashboardRoutes().getRouter());
    this.app.use("/processo", makeProcessoRoutes().getRouter());
  }

  public static async connectToDatabase() {
    if (!App.prisma) {
      App.prisma = new PrismaClient();
      await App.prisma.$connect();
     }
  }

  public async start(server: import("http").Server) {
    const port: number = Number(configs.PORT) || 3000;
    server.listen(port, "0.0.0.0", () => {
      console.log(`[app] > listening on port ${port}`);
    });
  }

  public getApplication() {
    return this.app;
  }
}

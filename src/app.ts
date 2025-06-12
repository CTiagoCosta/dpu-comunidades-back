import express, { Application, RequestHandler } from "express";
import { makeComplementaryDataRoutes } from "./factories/routes/complementaryDataRouterFactory";
import dotenvConfig from "./configs/dotenvConfig";
import { configureCors } from "./configs/corsConfig";
import configs from "./configs";
import { PrismaClient } from "./generated/prisma";

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
  }

  private configureRoutes(): void {
    this.app.use(makeComplementaryDataRoutes().getRouter());
  }

  public static async connectToDatabase() {
    if (!App.prisma) {
      App.prisma = new PrismaClient();
      // Optionally test the connection
      await App.prisma.$connect();
      console.log(`[app] > database connected using Prisma`);
    }
  }

  public async start() {
    const port: number = Number(configs.PORT) || 3000;
    this.app.listen(port, "0.0.0.0", () => {
      console.log(`[app] > listening on port ${port}`);
    });
  }

  public getApplication() {
    return this.app;
  }
}

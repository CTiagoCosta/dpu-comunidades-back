import { PrismaClient } from "../../../generated/prisma";
import prismaClient from "../../../prisma";

export abstract class BaseRepository<TModel> {
  protected prisma: PrismaClient;

  constructor() {
    this.prisma = prismaClient;
  }

  protected abstract get model(): any;
}

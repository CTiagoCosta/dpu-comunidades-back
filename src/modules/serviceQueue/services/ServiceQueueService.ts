import { ServiceQueueRepository } from "../repositories/ServiceQueueRepository";

export class ServiceQueueService {
  private repository = new ServiceQueueRepository();
    constructor() {
        this.repository = new ServiceQueueRepository();
    }
  async getByIdWithRelations(id: string) {
    return this.repository.findByIdWithRelations(id);
  }
}
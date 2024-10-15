import { IClientRepository } from "./IClientRepository";
import { IClient } from "../models/IClient";

export class ClientRepository implements IClientRepository{
    private clients: IClient[] = [];


    async create(client: IClient): Promise<void> {
        this.clients.push(client);
    }

    async findById(id: string): Promise<IClient | null> {
        return this.clients.find(client => client.id === id)|| null;
    }

    async update(id: string, client: IClient): Promise<void> {
        const index = this.clients.findIndex(c => c.id === id);
        if (index !== -1) this.clients[index] = client;
    }

    async delete(id: string): Promise<void> {
        this.clients = this.clients.filter(client => client.id !== id)
    }
}
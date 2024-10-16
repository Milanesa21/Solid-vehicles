import { ClientService } from "../services/ClientService";
import { Request, Response } from "express";
import { IClient } from "../models/IClient";

export class ClientController {
    constructor(private clientService: ClientService) {}

    // Crear un cliente
    async createClient(req: Request, res: Response): Promise<void> {
        const newClient: IClient = req.body;
        await this.clientService.createClient(newClient);
        res.status(201).send('Cliente creado');
    }

    // Obtener un cliente por ID
    async getClient(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const client = await this.clientService.getCLientById(id);
        if (client) {
            res.status(200).json(client);
        } else {
            res.status(404).send('Cliente no encontrado');
        }
    }

    // Actualizar un cliente por ID
    async updateClient(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const updatedClient: IClient = req.body;
        await this.clientService.updateClient(id, updatedClient);
        res.status(200).send('Cliente actualizado');
    }

    // Eliminar un cliente por ID
    async deleteClient(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        await this.clientService.deleteClient(id);
        res.status(200).send('Cliente borrado');
    }
}
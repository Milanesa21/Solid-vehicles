import { VehicleService } from "../services/VehicleService";
import {Request, Response} from 'express'
import { IVehicle } from "../models/IVehicle";


export class VehicleController {
    constructor(private vehicleService: VehicleService) {}

    // Crear un vehículo
    async createVehicle(req: Request, res: Response): Promise<void> {
        const newVehicle: IVehicle = req.body;
        await this.vehicleService.createVehicle(newVehicle);
        res.status(201).send('Vehiculo creado');
    }

    // Obtener un vehículo por ID
    async getVehicle(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const vehicle = await this.vehicleService.getVehicleById(id);
        if (vehicle) {
            res.status(200).json(vehicle);
        } else {
            res.status(404).send('Vehiculo no encontrado');
        }
    }

    // Actualizar un vehículo por ID
    async updateVehicle(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const updatedVehicle: IVehicle = req.body;
        await this.vehicleService.updateVehicle(id, updatedVehicle);
        res.status(200).send('Vehiculo actualizado');
    }

    // Eliminar un vehículo por ID
    async deleteVehicle(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        await this.vehicleService.deleteVehicle(id);
        res.status(200).send('Vehiculo borrado');
    }
}
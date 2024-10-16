import { IVehicleRepository } from "../repositories/IVehicleRepository";
import { IVehicle } from "../models/IVehicle";

export class VehicleService {
    constructor(private VehicleRepository: IVehicleRepository) {}


    async createVehicle(vehicle: IVehicle): Promise<void> {
        await this.VehicleRepository.create(vehicle);
    }

    async getVehicleById(id: string): Promise<IVehicle | null> {
        return await this.VehicleRepository.findById(id);
    }

    async updateVehicle(id: string, vehicle: IVehicle): Promise<void> {
        await this.VehicleRepository.update(id, vehicle);
    }

    async deleteVehicle(id:string): Promise<void> {
        await this.VehicleRepository.delete(id);
    }
}


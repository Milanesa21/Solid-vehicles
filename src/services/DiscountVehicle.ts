import { VehicleService } from "./VehicleService";
import { IVehicle } from "../models/IVehicle";

export class DiscountVehicleService extends VehicleService{
    async applyDiscount(id: string, discount: number): Promise<void> {
        const vehicle = await this.getVehicleById(id);
        if (vehicle) {
            vehicle.precio = vehicle.precio - vehicle.precio * discount;
            await this.updateVehicle(id, vehicle);
        }
    }
}
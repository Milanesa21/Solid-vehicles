import { IClient } from "../models/IClient";

export interface IClientRepository {
    create(vehicle: IVehicle): Promise<void>;
    findById(id: string): Promise<IClient | null>;
    update(id: string, vehicle: IVehicle): Promise<void>;
    delete(id: string): Promise<void>;
}
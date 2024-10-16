import express, { Application } from "express"
import { VehicleController } from "./controllers/VehicleController"
import { ClientController } from "./controllers/ClientControllers"
import { VehicleService } from "./services/VehicleService"
import { ClientService } from "./services/ClientService"
import { MongoVehicleRepository } from "./repositories/MongoVehicleRepository"
import { ClientRepository } from "./repositories/ClientRepository"

export class Server {
    private app: Application;

    constructor() {
        this.app = express();
        this.app.use(express.json());

        // Inicializar los repositorios
        const vehicleRepository = new MongoVehicleRepository();
        const clientRepository = new ClientRepository();

        // Inicializar los servicios
        const vehicleService = new VehicleService(vehicleRepository);
        const clientService = new ClientService(clientRepository);

        // Inicializar los controladores
        const vehicleController = new VehicleController(vehicleService);
        const clientController = new ClientController(clientService);

        // Definir las rutas
        this.routes(vehicleController, clientController);
    }

    // Definir las rutas para vehículos y clientes
    private routes(vehicleController: VehicleController, clientController: ClientController): void {
        // Rutas para vehículos
        this.app.post('/vehicles', vehicleController.createVehicle.bind(vehicleController)); // Crear vehículo
        this.app.get('/vehicles/:id', vehicleController.getVehicle.bind(vehicleController));  // Obtener vehículo por ID
        this.app.put('/vehicles/:id', vehicleController.updateVehicle.bind(vehicleController)); // Actualizar vehículo por ID
        this.app.delete('/vehicles/:id', vehicleController.deleteVehicle.bind(vehicleController)); // Eliminar vehículo por ID

        // Rutas para clientes
        this.app.post('/clients', clientController.createClient.bind(clientController)); // Crear cliente
        this.app.get('/clients/:id', clientController.getClient.bind(clientController));  // Obtener cliente por ID
        this.app.put('/clients/:id', clientController.updateClient.bind(clientController)); // Actualizar cliente por ID
        this.app.delete('/clients/:id', clientController.deleteClient.bind(clientController)); // Eliminar cliente por ID
    }


    public listen(port: number): void {
        this.app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
}


const server = new Server();
server.listen(3000);


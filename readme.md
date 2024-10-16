# API REST para Concesionaria de Vehículos

Este proyecto es una API REST para gestionar tanto vehículos como clientes de una concesionaria. La API sigue los principios SOLID, lo que garantiza que sea mantenible, escalable y modular. Implementa operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para vehículos y clientes.

## Tecnologías utilizadas

- **TypeScript**
- **Express**
- **MongoDB (simulado)**
- **PostgreSQL (simulado)**

## Configuración del proyecto

### 1. Clonar el repositorio

Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/Milanesa21/Solid-vehicles
```

### 2. Instalar dependencias

Una vez clonado el proyecto, navega a la carpeta del proyecto e instala las dependencias:

```bash
npm install
```

### 3. Ejecutar el servidor

Para iniciar el servidor en modo de desarrollo, usa el siguiente comando:

```bash
npm run dev
```

## Endpoints de la API:

### Vehículos

| Método | Ruta               | Descripción                          |
|--------|--------------------|--------------------------------------|
| POST   | `/vehicles`         | Crear un nuevo vehículo              |
| GET    | `/vehicles/:id`     | Obtener un vehículo por ID           |
| PUT    | `/vehicles/:id`     | Actualizar un vehículo por ID        |
| DELETE | `/vehicles/:id`     | Eliminar un vehículo por ID          |

### Clientes

| Método | Ruta               | Descripción                          |
|--------|--------------------|--------------------------------------|
| POST   | `/clients`          | Crear un nuevo cliente               |
| GET    | `/clients/:id`      | Obtener un cliente por ID            |
| PUT    | `/clients/:id`      | Actualizar un cliente por ID         |
| DELETE | `/clients/:id`      | Eliminar un cliente por ID           |

## Ejemplos en Json para prueba rapida de funcionamiento:

### Vehículos

#### Crear un Vehículo (POST /vehicles)
```bash 
{
    "id": "1",
    "marca": "Toyota",
    "modelo": "Corolla",
    "año": 2022,
    "precio": 20000
}
```

#### Actualizar un Vehículo (PUT /vehicles/:id)
```bash
{
    "id": "1",
    "marca": "Toyota",
    "modelo": "Corolla",
    "año": 2022,
    "precio": 18000
}
```

#### Obtener un Vehículo por ID (GET /vehicles/)

Solo se debe hacer una solicitud a la ruta vehicles/{id del vehiculo}

#### Eliminar un Vehículo (DELETE /vehicles/)

Solo se debe hacer una solicitud a la ruta de vehicles/{id del vehiculo}

Para clientes es lo mismo pero cambiando la ruta de vehicles por clients



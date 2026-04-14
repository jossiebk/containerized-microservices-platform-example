# 📑 Orders API (.NET + PostgreSQL)

Microservicio encargado de la gestión de órdenes. Utiliza PostgreSQL como base de datos.

Nota: El microservicio aún no se puede ejecutar individualmente.

## 📦 Instalación
```bash
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL --version 8.0.4
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL --version 8.0.4
```

📍 Puerto: 5006

## Endpoints

### Health Check
```bash
GET http://localhost:5006/api/orders/healthcheck
```

### Obtener órdenes
```bash
GET http://localhost:5006/api/orders
```

### Crear orden
```bash
POST http://localhost:5006/api/orders
{
  "userName": "Jossie",
  "productName": "Laptop",
  "quantity": 1
}
```

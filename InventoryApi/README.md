# 🏬 Inventory API (Go)

Microservicio encargado de la gestión del inventario de productos.
## 🚀 Ejecución
Nota: es necesario tener instalado el entorno de Go.

## 🚀 Ejecución
```bash
go run main.go
```

📍 Puerto: 5004

## Endpoints

### Obtener inventario
```bash
GET http://localhost:5004/api/inventory
```

### Obtener producto por ID
```bash
GET http://localhost:5004/api/inventory/product?id=1
```

### Health Check
```bash
GET http://localhost:5004/api/inventory/healthcheck
```

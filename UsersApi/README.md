# 👤 Users API (.NET)

Microservicio encargado de la gestión de usuarios. Permite crear y consultar usuarios dentro del sistema.

## 🚀 Ejecución
```bash
dotnet run
```

📍 Puerto: 5001

## Endpoints

### Obtener usuarios
```bash
GET http://localhost:5001/api/users
```

### Crear usuario
```bash
POST http://localhost:5001/api/users
{
  "name": "Jossie"
}
```

### Health Check
```bash
GET http://localhost:5001/api/users/healthcheck
```

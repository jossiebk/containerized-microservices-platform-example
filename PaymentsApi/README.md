# 💳 Payments API (Java + PostgreSQL)

Microservicio encargado de procesar pagos dentro del sistema.

Nota: El microservicio aún no se puede ejecutar individualmente.

## 🚀 Build
```bash
mvn clean package
```

📍 Puerto: 5007

## Endpoints

### Health Check
```bash
GET http://localhost:5007/api/payments/healthcheck
```

### Obtener pagos
```bash
GET http://localhost:5007/api/payments
```

### Registrar pago
```bash
POST http://localhost:5007/api/payments
{
  "userName": "Jossie",
  "amount": 200
}
```

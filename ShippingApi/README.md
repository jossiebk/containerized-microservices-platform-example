# 🚚 Shipping API (Python)

Microservicio encargado del cálculo de envíos basado en ciudad y peso del producto.

## 📦 Instalación
```bash
pip install uvicorn fastapi starlette
```

## 🚀 Ejecución
```bash
python -m uvicorn main:app --reload --port 5003
```

📍 Puerto: 5003

## Endpoints

### Obtener información de envíos
```bash
GET http://localhost:5003/api/shipping
```

### Calcular envío
```bash
POST http://localhost:5003/api/shipping/calculate
{
  "city": "Guatemala city",
  "weight": 2.5
}
```

### Health Check
```bash
GET http://localhost:5003/api/shipping/healthcheck
```

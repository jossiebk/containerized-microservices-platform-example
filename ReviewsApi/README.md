# ⭐ Reviews API (Python + MongoDB)

Microservicio encargado de la gestión de reseñas de productos.

Nota: El microservicio aún no se puede ejecutar individualmente.

## 📦 Instalación
```bash
pip install fastapi uvicorn pymongo
```

📍 Puerto: 5009

## Endpoints

### Obtener reseñas
```bash
GET http://localhost:5009/api/reviews
```

### Obtener reseñas por producto
```bash
GET http://localhost:5009/api/reviews/product/Laptop
```

### Health Check
```bash
GET http://localhost:5009/api/reviews/healthcheck
```

### Crear reseña
```bash
POST http://localhost:5009/api/reviews
{
  "productName": "Laptop",
  "userName": "Jossie",
  "rating": 5,
  "comment": "Excelente producto"
}
```

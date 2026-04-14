# 🛒 Cart API (NodeJs)

Microservicio encargado de la gestión del carrito de compras utilizando almacenamiento en memoria.

## 📦 Instalación
```bash
npm install
```

## 🚀 Ejecución
```bash
node index.js
```

📍 Puerto: 5005

## Endpoints

### Health Check
```bash
GET http://localhost:5005/api/cart/healthcheck
```

### Obtener carrito
```bash
GET http://localhost:5005/api/cart
```

### Agregar al carrito
```bash
POST http://localhost:5005/api/cart
{
  "productName": "Keyboard",
  "quantity": 1
}
```

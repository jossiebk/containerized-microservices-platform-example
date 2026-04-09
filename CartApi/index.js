const cors = require("cors");
const express = require("express");

const app = express();
// Middleware CORS
app.use(cors());
app.use(express.json());

const PORT = 5005;

// Datos en memoria
let cart = [
  { id: 1, productName: "Laptop", quantity: 1 },
  { id: 2, productName: "Mouse", quantity: 2 }
];

// 🔹 Middleware de logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// 🔹 Obtener carrito
app.get("/api/cart", (req, res) => {
  res.json(cart);
});

// 🔹 Agregar producto
app.post("/api/cart", (req, res) => {
  const { productName, quantity } = req.body;

  const newItem = {
    id: cart.length + 1,
    productName,
    quantity
  };

  cart.push(newItem);

  res.json(newItem);
});

// 🔹 Healthcheck
app.get("/api/cart/healthcheck", (req, res) => {
  res.json({
    status: "Healthy",
    service: "Cart API"
  });
});

// 🔹 Start server
app.listen(PORT, () => {
  console.log(`Cart API is running on port ${PORT}`);
});
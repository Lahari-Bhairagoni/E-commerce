const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

// Path to orders.json
const ordersFile = path.join(__dirname, "../data/orders.json");

// GET route (keep this)
router.get("/", (req, res) => {
  res.send("Orders API is working!");
});

// ✅ POST route to place an order
router.post("/", (req, res) => {
  const order = req.body;

  // Read existing orders (or start with empty array)
  let orders = [];
  if (fs.existsSync(ordersFile)) {
    const data = fs.readFileSync(ordersFile, "utf-8");
    orders = JSON.parse(data || "[]");
  }

  // Add the new order
  orders.push(order);

  // Write back to file
  fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2));

  res.status(201).json({ message: "Order placed successfully" });
});

// GET route to fetch orders by email
router.get("/:email", (req, res) => {
  const userEmail = req.params.email;

  if (!fs.existsSync(ordersFile)) {
    return res.status(404).json({ message: "No orders found." });
  }

  const data = fs.readFileSync(ordersFile, "utf-8");
  const orders = JSON.parse(data || "[]");

  // Filter orders by user email
  const userOrders = orders.filter(order => order.customer.email === userEmail);

  res.json(userOrders);
});


module.exports = router;

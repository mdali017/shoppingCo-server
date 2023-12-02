const express = require("express");
const app = express();
const cors = require("cors");
const productsRoute = require("../routes/productsRoute");
const usersRoute = require("../routes/usersRoute");
const cartsRoute = require("../routes/cartsRoute");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// products related api
app.use("/api/products", productsRoute);

// users related api
app.use("/api/users", usersRoute);

// carts related api
app.use("/api/carts", cartsRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome To Server..",
  });
});

// client Error
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});

// Server Error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something Wrong...",
  });
});

module.exports = app;

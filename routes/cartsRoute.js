const express = require("express");
const {
  createCartsData,
  getCartData,
  deleteCartData,
} = require("../controllers/cartsController");
const cartsRoute = express.Router();

cartsRoute.post("/", createCartsData);
cartsRoute.get("/", getCartData);
cartsRoute.delete("/:id", deleteCartData);

module.exports = cartsRoute;

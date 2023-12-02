const express = require("express");
const {
  createAProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/ProductsController");
const productsRoute = express.Router();

productsRoute.post("/", createAProduct);
productsRoute.get("/", getAllProducts);
productsRoute.get("/:id", getSingleProduct);
productsRoute.delete("/:id", deleteProduct);
productsRoute.patch("/:id", updateProduct);

module.exports = productsRoute;

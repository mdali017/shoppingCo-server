const mongoose = require("mongoose");
const { Schema } = mongoose;

const productsSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  regularPrice: { type: Number, required: true },
  offeredPrice: { type: Number, required: true },
  discount: { type: Number },
  rating: { type: Number },
});

const Products = mongoose.model("Products", productsSchema);
module.exports = Products;

const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartsSchema = new Schema({
  itemId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

const Carts = mongoose.model("Carts", cartsSchema);
module.exports = Carts;

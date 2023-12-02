const Carts = require("../models/cartsModel");

// create a carts
const createCartsData = async (req, res) => {
  try {
    const carts = req.body;
    const result = await Carts.create(carts);
    res.status(201).json({
      message: "carts item is created successfully",
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get carts data for specific user
const getCartData = async (req, res) => {
  try {
    const email = req.query.email;
    if (!email) {
      res.send([]);
    }
    const query = { email: email };
    const result = await Carts.find(query);
    // console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

// delete carts data
const deleteCartData = async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const result = await Carts.deleteOne(query);
  res.status(200).json({
    message: "cart data deleted successfully",
    result,
  });
};

module.exports = { createCartsData, getCartData, deleteCartData };

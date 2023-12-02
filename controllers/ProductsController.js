const Products = require("../models/productsModel");
const app = require("../src/app");

// create a products
const createAProduct = async (req, res) => {
  try {
    const product = req.body;
    const result = await Products.create(product);
    res.status(200).json({
      message: "Product is create successfully",
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get all products
const getAllProducts = async (req, res) => {
  try {
    const result = await Products.find();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

// get one single product
const getSingleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: id };
    const result = await Products.findOne(query);
    res.status(200).json({
      message: "Single Product is here...",
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

// delete a product
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: id };
    const result = await Products.deleteOne(query);
    res.status(200).json({
      message: "Product deleted successfully",
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

// update a product data
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: id };
    const updateDoc = {
      $set: {
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        image: req.body.image,
        regularPrice: req.body.regularPrice,
        offeredPrice: req.body.offeredPrice,
        discount: req.body.discount,
        rating: req.body.rating,
      },
    };
    const result = await Products.updateOne(query, updateDoc);
    res.status(200).json({
      message: "Product Updated successfully",
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createAProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};

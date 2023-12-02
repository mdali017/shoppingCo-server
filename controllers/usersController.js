const Users = require("../models/usersModel");

// create an user
const createAnUser = async (req, res) => {
  try {
    const user = req.body;
    const result = await Users.create(user);
    res.status(201).json({
      message: "user created successfully",
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get all users
const getAllUsers = async (req, res) => {
  try {
    const result = await Users.find();
    res.status(200).json({
      message: "All users is here...",
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get single user
const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: id };
    const result = await Users.find(query);
    res.status(200).json({
      message: "Single user is here...",
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

// update a single user
const updateSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: id };
    const updateDoc = {
      $set: {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
      },
    };
    const result = await Users.updateOne(query, updateDoc);
    res.status(200).json({
      message: "Single user id update successfully...",
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

// delete single user
const deleteSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: id };
    const result = await Users.deleteOne(query);
    res.status(200).json({
      message: "Single user delete successfully...",
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createAnUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
};

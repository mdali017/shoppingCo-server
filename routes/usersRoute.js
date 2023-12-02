const express = require("express");
const {
  createAnUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
} = require("../controllers/usersController");
const usersRoute = express.Router();

usersRoute.post("/", createAnUser);
usersRoute.get("/", getAllUsers);
usersRoute.get("/:id", getSingleUser);
usersRoute.patch("/:id", updateSingleUser);
usersRoute.delete("/:id", deleteSingleUser);

module.exports = usersRoute;

const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String },
});

const Users = mongoose.model("Users", usersSchema);
module.exports = Users;

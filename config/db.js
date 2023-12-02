const mongoose = require("mongoose");
const { mongodbURL } = require("../src/secret");

const connectDatabase = async () => {
  try {
    // console.log(mongodbURL);
    await mongoose.connect(mongodbURL);
    console.log("Mongodb Connection is Successfully..");
    // mongoose.connection.on("error", (error) => {
    //   console.error("DB connection error", error);
    // });
  } catch (error) {
    console.error("Cound not connect to DB:", error.toString());
  }
};

module.exports = connectDatabase;

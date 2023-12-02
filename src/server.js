const connectDatabase = require("../config/db");
const app = require("./app");

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is Running on Port: ${port}`);
  connectDatabase();
});

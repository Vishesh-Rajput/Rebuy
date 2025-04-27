// connect or project to mongoDB database
require("dotenv").config();


const mongoose = require("mongoose");

// mongoose.connect(process.env.mongo_url);
mongoose.connect("mongodb+srv://Fakeuser:cooldb@cluster0.x9ffyul.mongodb.net/Rebuy-database?retryWrites=true&w=majority");

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo DB Connection Successful");
});

connection.on("error", (err) => {
  console.log("Mongo DB Connection Failed");
});

module.exports = connection;

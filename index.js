const express = require("express");
const mongoose = require("mongoose");
const app = express();

const linkRoute = require("./routes/linkRoute");

mongoose.connect("mongodb://localhost/links", (error, db) => {
  //database name
  console.log("Connected to database");
});

app.use("/", linkRoute);

app.listen(3000, () => console.log("The server is on"));

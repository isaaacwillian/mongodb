const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

const linkRoute = require("./routes/linkRoute");

mongoose.connect("mongodb://localhost/links", (error, db) => {
  console.log("Connected to database");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));

app.use("/", linkRoute);

app.listen(3000, () => console.log("The server is on"));

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const linkSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  click: Number,
});

const Link = mongoose.model("Link", linkSchema); //collections

// let link = new Link({
//   title: "google",
//   description: "blablabla",
//   url: "https://www.google.com",
//   click: 0,
// });

// link
//   .save()
//   .then((doc) => console.log(doc))
//   .catch((err) => console.log(err));

mongoose.connect("mongodb://localhost/links", (error, db) => {
  //database name
  console.log("Connected to database");

  app.get("/:title", async (req, res) => {
    let title = req.params.title;

    try {
      let doc = await Link.findOne({ title });

      res.redirect(doc.url);
    } catch (error) {
      res.send(error);
    }
  });
});

app.get("/", (req, res) => res.send("Hello World"));

app.listen(3000, () => console.log("The server is on"));

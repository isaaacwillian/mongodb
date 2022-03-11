const Link = require("../models/Link");

const redirect = async (req, res) => {
  let title = req.params.title;

  Link.findOne({ title })
    .then((doc) => {
      res.redirect(doc.url);
    })
    .catch((error) => {
      res.send("Error 404 - NOT FOUND");
    });
};

const showJson = async (req, res) => {
  let title = req.params.title;

  Link.find({ title })
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.send("Error 404 - Not Found");
    });
};

const addLink = async (req, res) => {
  let link = new Link(req.body);

  link
    .save()
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.render("index", { error, body: req.body });
    });
};

const allLinks = async (req, res) => {
  Link.find({})
    .then((links) => {
      res.render("all", { links });
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = { redirect, showJson, addLink, allLinks };

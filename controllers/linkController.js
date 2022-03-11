const Link = require("../models/Link");

const redirect = async (req, res) => {
  let title = req.params.title;

  Link.findOne({ title })
    .then((doc) => {
      res.redirect(doc.url);
    })
    .catch((error) => {
      res.status(404).send("Error 404 - NOT FOUND");
    });
};

const showJson = async (req, res) => {
  let title = req.params.title;

  Link.find({ title })
    .then((doc) => {
      if (doc.length != 0) {
        res.send(doc);
      } else {
        throw new Error("404");
      }
    })
    .catch((error) => {
      res.status(404).send(error + " NOT FOUND");
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

const deleteLink = async (req, res) => {
  let id = req.params.id;
  if (!id) {
    id = req.body.id;
  }
  Link.findByIdAndDelete(id)
    .then((response) => {
      res.send(response.id);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

module.exports = { redirect, showJson, addLink, allLinks, deleteLink };

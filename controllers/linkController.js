const Link = require("../models/Link");

const redirect = async (req, res) => {
  let title = req.params.title;

  try {
    let doc = await Link.findOne({ title });

    res.redirect(doc.url);
  } catch (error) {
    res.send("Error 404");
  }
};

const showJson = async (req, res) => {
  let title = req.params.title;
  try {
    let doc = await Link.find({ title });

    res.send(doc);
  } catch (error) {
    res.send("Error 404");
  }
};

const addLink = async (req, res) => {
  let link = new Link(req.body);

  link
    .save()
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = { redirect, showJson, addLink };

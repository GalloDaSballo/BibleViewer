var express = require("express");
var router = express.Router();

// import database
const knex = require("./../db.js");

// define the home page route
router.get("/", function (req, res) {
  res.send("API Route is working");
});

// get a specific route
router.get("/verse/:verseId", function (req, res) {
  const data = knex
    .from("t_asv")
    .select("id", "c", "v", "t")
    .where("id", req.params.verseId)
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

module.exports = router;

// get a specific book
router.get("/book/:bookId", function (req, res) {
  const data = knex
    .from("t_asv")
    .select("id", "c", "v", "t")
    .where("b", req.params.bookId)
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

module.exports = router;

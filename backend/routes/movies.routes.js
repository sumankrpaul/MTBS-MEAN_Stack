const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).send({ message: "list of movies"});
});

router.post("/", function (req, res) {
  res.status(200).send({ message: "add new movie"});
});

router.get("/:movieId", function (req, res) {
  res.status(200).send({ message: "my movie details"});
});

router.put("/:movieId", function (req, res) {
  res.status(200).send({ message: "update movie"});
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get("/me/sign_in", function (req, res) {
  res.status(200).send({ message: "sign in to my customer profile"});
});

router.get("/me", function (req, res) {
  res.status(200).send({ message: "my profile"});
});

router.put("/me", function (req, res) {
  res.status(200).send({ message: "update my customer profile"});
});

router.get("/me/logoff", function (req, res) {
  res.status(200).send({ message: "log off my customer profile"});
});

router.post("/", function (req, res) {
  res.status(200).send({ message: "add new admin"});
});

module.exports = router;

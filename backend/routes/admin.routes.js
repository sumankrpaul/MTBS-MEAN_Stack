const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).send({ message: "list of admins"});
});

router.get("/me/sign_in", function (req, res) {
  res.status(200).send({ message: "sign in to my admin profile"});
});

router.get("/me", function (req, res) {
  res.status(200).send({ message: "my profile"});
});

router.put("/me", function (req, res) {
  res.status(200).send({ message: "update my profile"});
});

router.get("/me/logoff", function (req, res) {
  res.status(200).send({ message: "log off my profile"});
});

router.post("/", function (req, res) {
  res.status(200).send({ message: "add new admin"});
});

router.post("/", function (req, res) {
  res.status(200).send({ message: "add new admin"});
});

router.put("/:adminId", function (req, res) {
  res.status(200).send({ message: "edit admin"});
});

router.delete("/:adminId", function (req, res) {
  res.status(200).send({ message: "delete admin"});
});

router.get("/customers", function (req, res) {
  res.status(200).send({ message: "list of customers"});
});


module.exports = router;

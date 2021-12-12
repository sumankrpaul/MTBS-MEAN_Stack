const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');
const middleware = require('../middlewares');

router.post("/sign_in", Controllers.adminController.signIn);

router.get("/", middleware.authenticate, Controllers.adminController.listOfAllAdmins);

router.get("/me", middleware.authenticate, Controllers.adminController.myProfile);

router.put("/me", function (req, res) {
  res.status(200).send({ message: "update my profile"});
});

router.get("/me/logoff", function (req, res) {
  res.status(200).send({ message: "log off my profile"});
});

router.post("/", Controllers.adminController.addNewAdmin);

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

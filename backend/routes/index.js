const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    res.status(200).send({ message: "route configured"});
});

module.exports = router;
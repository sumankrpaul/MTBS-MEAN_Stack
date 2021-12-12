const express = require('express');
const router = express.Router();
const AdminRoutes = require('./admin.routes');
const CustomerRoutes = require('./customers.routes');
const MoviesRoutes = require('./movies.routes');

router.get("/", function (req, res) {
    res.status(200).send({ message: "route configured"});
});

router.use("/admin", AdminRoutes);
router.use("/customer", CustomerRoutes);
router.use("/movies", MoviesRoutes);

module.exports = router;

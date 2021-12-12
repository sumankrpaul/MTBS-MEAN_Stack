require('dotenv').config();
const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const httpServer = require("http");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(morgan('dev'));
app.use('/api', routes);

const MONGOURI = process.env.MONGOURI;
mongoose
.connect(MONGOURI ,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(()=> console.log("DB Connected"))
.catch(e => {
    console.error(e);
});

app.get("/", function (req, res) {
    res.status(200).send({ message: "Ok"});
});

const server = httpServer.createServer(app);
const PORT = process.env.PORT || '9090';

server.listen(PORT, () => {
    console.log(`app is live at ${PORT}`);
});


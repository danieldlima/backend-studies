const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const config = require("./config");

const { routes } = require("./routes");

const app = express();
app.set('port', config.service.port);
app.use(express.json());
app.use(logger('combined'));
app.use(helmet());
app.use(cors());

app.use(routes);

app.listen(config.service.port, () => {
    console.log("Backend Service from Daniel Lima Studies");
    console.log("Running on port: " + config.service.port);
});
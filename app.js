const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require('cors');

const { routes } = require("./routes");

const app = express();
app.set('port', 5000);
app.use(express.json());
app.use(logger('combined'));
app.use(helmet());
app.use(cors());

app.use(routes);

app.listen(5000, () => {
    console.log("Backend Service from Daniel Lima Studies");
    console.log("Running on port: " + 5000);
});
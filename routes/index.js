const express = require("express");
const routes = express.Router();
const { service } = require("../config")

const indexController = require("../controllers/indexController");

const { todoRoutes } = require("./todo.routes");
const { userRoutes } = require("./user.routes");

routes.get(`${service.prefix_url}/`, indexController.index);
routes.use(`${service.prefix_url}/todo`, todoRoutes);
routes.use(`${service.prefix_url}/user`, userRoutes);

module.exports = {
    routes
}
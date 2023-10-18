const express = require("express");
const routes = express.Router();

const indexController = require("../controllers/indexController");

const { todoRoutes } = require("./todo.routes");
const { userRoutes } = require("./user.routes");

routes.get('/', indexController.index);
routes.use('/todo', todoRoutes);
routes.use('/user', userRoutes);

module.exports = {
    routes
}
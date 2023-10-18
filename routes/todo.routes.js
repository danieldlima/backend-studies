const express = require("express");
const todoRoutes = express.Router();

const todoController = require("../controllers/todoController");

todoRoutes.get('/', todoController.getAllTodo);
todoRoutes.get('/:id', todoController.getOneTodo);
todoRoutes.post('/', todoController.postTodo);
todoRoutes.put('/:id', todoController.putTodo);
todoRoutes.delete('/:id', todoController.deleteTodo);

module.exports = {
    todoRoutes
}
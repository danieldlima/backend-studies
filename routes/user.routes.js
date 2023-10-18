const express = require("express");
const userRoutes = express.Router();

const userController = require("../controllers/userController");

userRoutes.get('/', userController.getAllUser);
userRoutes.get('/:id', userController.getOneUser);
userRoutes.post('/', userController.postUser);
userRoutes.put('/:id', userController.putUser);
userRoutes.delete('/:id', userController.deleteUser);

module.exports = {
    userRoutes
}
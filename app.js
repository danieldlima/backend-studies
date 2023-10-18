const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require('cors');


const todoController = require("./controllers/todoController");
const userController = require("./controllers/userController");


const app = express();
app.set('port', 5000);
app.use(express.json());
app.use(logger('combined'));
app.use(helmet());
app.use(cors());


app.get('/', (req, res, next) => {
    return res.status(200).json({ message: "On-line" });
});


app.get('/todo', todoController.getAllTodo);
app.get('/todo/:id', todoController.getOneTodo);
app.post('/todo', todoController.postTodo);
app.put('/todo/:id', todoController.putTodo);
app.delete('/todo/:id', todoController.deleteTodo);

app.get('/user', userController.getAllUser);
app.get('/user/:id', userController.getOneUser);
app.post('/user', userController.postUser);
app.put('/user/:id', userController.putUser);
app.delete('/user/:id', userController.deleteUser);


app.listen(5000, () => {
    console.log("Backend Service from Daniel Lima Studies");
    console.log("Running on port: " + 5000);
});
const { todoData } = require('../databases/todo.js');

const getAllTodo = async (req, res, next) => {
    return res.status(200).json(todoData);
};

const getOneTodo = async (req, res, next) => {
    const id = parseInt(req.params.id);

    const result = todoData.find(obj => obj.id === id);

    return res.status(200).json(result);
};

const postTodo = async (req, res, next) => {
    const { body } = req;

    todoData.push(body);

    return res.status(200).json({ message: "Created with success" });
};

const putTodo = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const { todo } = req.body;

    const objIndex = todoData.findIndex((obj => obj.id == id));

    todoData[objIndex].todo = todo;

    return res.status(200).json({ message: "Updated with success" });
};

const deleteTodo = async (req, res, next) => {
    const id = parseInt(req.params.id);

    let newTodoData = todoData.filter( (obj) => {
        return obj.id !== id;
    });

    //todoData = { ...newTodoData }

    return res.status(200).json({ message: "Deleted with success" });
};

module.exports = {
    getAllTodo,
    getOneTodo,
    postTodo,
    putTodo,
    deleteTodo
}
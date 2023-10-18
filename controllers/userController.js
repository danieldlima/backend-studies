const { userData } = require('../databases/user.js');

const getAllUser = async (req, res, next) => {
    return res.status(200).json(userData);
};

const getOneUser = async (req, res, next) => {
    const id = parseInt(req.params.id);

    const result = userData.find(obj => obj.id === id);

    return res.status(200).json(result);
};

const postUser = async (req, res, next) => {
    const { body } = req;

    userData.push(body);

    return res.status(200).json({ message: "Created with success" });
};

const putUser = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const { user } = req.body;

    const objIndex = userData.findIndex((obj => obj.id == id));

    userData[objIndex].user = user;

    return res.status(200).json({ message: "Updated with success" });
};

const deleteUser = async (req, res, next) => {
    const id = parseInt(req.params.id);

    let newUserData = userData.filter( (obj) => {
        return obj.id !== id;
    });

    //userData = { ...newUserData }

    return res.status(200).json({ message: "Deleted with success" });
};

module.exports = {
    getAllUser,
    getOneUser,
    postUser,
    putUser,
    deleteUser
}
const index = async (req, res, next) => {
    return res.status(200).json({ message: "On-line" });
};

module.exports = {
    index
}
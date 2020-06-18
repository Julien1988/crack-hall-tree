const db = require("../_helpers/db");
const Trees = db.Trees;

async function getAllTrees(req, res) {
    try {
        const trees = await Trees.find();
        console.log(trees);
        res.json(trees);
    } catch (error) {
        res.send(error.response.data.message);
    }
}

module.exports = {
    getAllTrees,
};

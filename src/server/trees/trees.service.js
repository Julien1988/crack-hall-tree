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

// function getAllTrees() {
//     Threes.find(function (err, trees) {
//         if (err) return console.error(err);

//         let getAllTrees = trees;

//         console.log("==> TU ES DANS ALL-THREES");
//         res.json(getAllTrees);
//     });
// }

// async function getAllTrees() {
//     try {
//         const Tree = await Trees.find();
//         console.log(Tree);
//         res.json(Tree);
//     } catch (error) {
//         res.send(error.response.data.message);
//     }
// }

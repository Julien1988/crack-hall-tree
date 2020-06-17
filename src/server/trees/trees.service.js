const db = require("../_helpers/db");
const Trees = db.Trees;

module.exports = {
    getAllTrees,
};

async function getAllTrees() {
    try {
        const Tree = await Trees.find();
        console.log("CA PASSE ICI");
        res.json(Tree);
    } catch (error) {
        res.send(error.response.data.message);
    }
}

// function getAllTrees() {
//     Three.find(function (err, trees) {
//         if (err) return console.error(err);

//         let getAllTrees = trees;

//         console.log("==> TU ES DANS ALL-THREES");
//         res.json(getAllTrees);
//     });
// }

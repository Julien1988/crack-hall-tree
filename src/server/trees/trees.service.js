const db = require("../_helpers/db");
const Trees = db.Trees;
const newUserFunction = require("../getfreetrees");

// Récupération de l'ensemble des arbres
async function getAllTrees(req, res) {
    try {
        const trees = await Trees.find();
        // console.log(trees);
        res.json(trees);
    } catch (error) {
        res.send(error.response.data.message);
    }
}

// Recupération de l'id d'un joueur et envois des arbres correspondant
async function getIdPlayer(req, res) {
    try {
        const idPlayer = await req.params;

        const playerTrees = await Trees.find({player_id: idPlayer.getidplayer});
        res.json(playerTrees);
    } catch (error) {
        res.send(error);
    }
}

async function newPlayerTreesGenerator(req, res) {
    try {
        const idPlayer = await req.params;
        const sendIdPlayer = await idPlayer.treesgenerator;
        //console.log(sendIdPlayer);
        const freeTrees = await Trees.find({free: true});
        // res.json(freeTrees);

        newUserFunction(sendIdPlayer, freeTrees);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    getAllTrees,
    getIdPlayer,
    newPlayerTreesGenerator,
};

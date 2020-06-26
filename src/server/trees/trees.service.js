const db = require("../_helpers/db");
const Trees = db.Trees;
const User = db.User;
const newUserFunction = require("../algo/getfreetrees");
const otherPlayerPrice = require("../algo/otherplayerprice");
const userService = require("../users/user.service");
const lockFreeTreeAlgo = require("../algo/lockfreetree");

//const {createIndexes} = require("./trees.model");

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
    console.log("============newPlayerTreesGenerator=======");
    const idPlayer = req._id;
    const pseudoPlayer = req.pseudo;
    const colorPlayer = req.color;
    console.log(idPlayer, pseudoPlayer, colorPlayer);

    try {
        const freeTrees = await Trees.find({free: true});

        newUserFunction(idPlayer, freeTrees, pseudoPlayer, colorPlayer);
    } catch (error) {
        res.send(error);
    }
}
// lat: 5ece7015b467be4c63b04e4a
async function buyOtherPlayerTree(req, res) {
    try {
        const allTrees = await Trees.find();
        const idTree = await req.params;

        const getTree = await Trees.findById(idTree.treeid);
        const playerId = await idTree.playerid;

        otherPlayerPrice(getTree, allTrees, playerId);
    } catch (error) {
        res.send(error);
    }
}

async function lockFreeTree(req, res) {
    // joueur : 5eec6ae2a4b8a100666f6358
    // arbre:  5ece7015b467be4c63b04e47

    //http://localhost/trees/locktree/5eec6ae2a4b8a100666f6358/5ece7015b467be4c63b04e47
    try {
        const playerId = req.params.playerid;
        const treeId = req.params.treeid;
        const playerInfo = await User.find({_id: playerId});
        const treeInfo = await Trees.find({_id: treeId});

        const priceForLock = await lockFreeTreeAlgo(playerInfo[0], treeInfo[0]);
        console.log(priceForLock);
    } catch (error) {
        res.send(error);
    }
}

async function buyAFreeTree(req, res) {
    // http://localhost/trees/locktree/5eec6ae2a4b8a100666f6358/5ece7015b467be4c63b04e47
    try {
        // 5ef4723884fda30011baf3d6
        // 5eec6ae2a4b8a100666f6358
        const treeId = req.params.gettreeid;
        const playerId = req.params.playerid;
        const findTree = await Trees.find({_id: treeId});
        const treeLeave = await findTree[0].leave;

        const user = await User.findById(playerId);
        if (
            user.money != null ||
            user.money != undefined ||
            user.money >= treeLeave ||
            playerId != findTree[0].player_id
        ) {
            const buyingTree = await Trees.findById(treeId, function (
                err,
                doc,
            ) {
                doc.player_id = playerId;
                doc.free = false;
                doc.player_color = user.color;
                doc.save();
                console.log("modification de l'abre");
            });
        } else {
            console.log(
                "Tu n'as pas assez d'argent, vas donc tondre des pelouses !!!!",
            );
        }
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    getAllTrees,
    getIdPlayer,
    newPlayerTreesGenerator,
    buyOtherPlayerTree,
    buyAFreeTree,
    lockFreeTree,
};

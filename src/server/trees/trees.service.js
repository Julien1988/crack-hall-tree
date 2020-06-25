const db = require("../_helpers/db");
const Trees = db.Trees;
const User = db.User;
const newUserFunction = require("../getfreetrees");
const otherPlayerPrice = require("../otherplayerprice");
const userService = require("../users/user.service");


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
    const idPlayer = req.pseudo;
    console.log(idPlayer);
    // console.log(localStorage.getItem("tokenUserId"));

    try {
        const findPlayer = await User.find();
        res.json(findPlayer);
    } catch (error) {
        res.send(error);
    }
    // try {
    //     const idPlayer = await req.params.getidplayer;

    //     const freeTrees = await Trees.find({free: true});

    //     newUserFunction(idPlayer, freeTrees);
    // } catch (error) {
    //     res.send(error);
    // }
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
    try {
        const idPlayer = await req.params.getidplayer;
        const idTree = await req.params.getidtree;

        const getTreeToLock = await Trees.findById(idTree.idTree);
        const allTrees = await Trees.find();
        lockFreeTree(idPlayer, getTreeToLock, allTrees);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    getAllTrees,
    getIdPlayer,
    newPlayerTreesGenerator,
    buyOtherPlayerTree,
    lockFreeTree,
};

const db = require("../_helpers/db");
const {doc} = require("prettier");
const Trees = db.Trees;
const User = db.User;

const lockFreeTreeAlgo = (playerInfo, treeInfo) => {
    console.log(playerInfo, treeInfo);
};

module.exports = lockFreeTreeAlgo;

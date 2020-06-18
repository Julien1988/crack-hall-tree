const express = require("express");
const router = express.Router();
const treeService = require("./trees.service");
const {RuleTester} = require("eslint");

router.get("/alltrees", treeService.getAllTrees);

router.get("/:getidplayer", treeService.getIdPlayer);

router.get("/newplayer/:treesgenerator", treeService.newPlayerTreesGenerator);

module.exports = router;

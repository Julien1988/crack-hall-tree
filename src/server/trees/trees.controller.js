﻿/* eslint-disable no-unused-vars */
const express = require("express");
const router = express.Router();
const treeService = require("./trees.service");
const treesService = require("./trees.service");
//const {RuleTester} = require("eslint");

router.get("/alltrees", treeService.getAllTrees);

router.get("/:getidplayer", treeService.getIdPlayer);

router.get("/newplayer/:treesgenerator", treeService.newPlayerTreesGenerator);

router.get(
    "/buyotherplayertree/:treeid/:playerid",
    treeService.buyOtherPlayerTree,
);
/* router.get("/test_id", treesService.getCurrent);
 */
module.exports = router;

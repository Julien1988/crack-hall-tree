const express = require("express");
const router = express.Router();
const treeService = require("./trees.service");

router.get("/alltrees", treeService.getAllTrees);

module.exports = router;

/* eslint-disable no-confusing-arrow */
/* eslint-disable no-use-before-define */
const express = require("express");
const router = express.Router();
const algoService = require("./algo.service");

// routes
router.get("/tree", algoService.getAll);
router.get("/3Trees", algoService.get3Threes);
//router.get("/show", algoService.sheete);
//router.get("/:id", getById);
//router.put("/:id", update);
//router.delete("/:id", _delete);

module.exports = router;

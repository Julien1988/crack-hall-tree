/* eslint-disable no-confusing-arrow */
/* eslint-disable no-use-before-define */
const express = require("express");
const router = express.Router();
const algoService = require("./algo.service");

// routes
router.get("/score/:id", getById);

//annexe return money way from algoService
function getById(req, res, next) {
    algoService
        .getById(req.params.id)
        .then(cashes => (cashes ? res.json(cashes) : res.sendStatus(404)))
        .catch(err => next(err));
}

module.exports = router;

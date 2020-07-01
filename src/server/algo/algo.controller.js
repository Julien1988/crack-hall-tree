/* eslint-disable no-confusing-arrow */
/* eslint-disable no-use-before-define */
const express = require("express");
const router = express.Router();
const algoService = require("./algo.service");
const userService = require("../users/user.service");
const db = require("../_helpers/db");
const User = db.User;

// routes
router.get("/score/:id", getMoneyById);
router.get("/scores/:id", returnMoney15M);
router.get("/money/:playerid", getMoney);
// router.get("/updatetime/:playerid", updateUserTime);

//annexe return money way from algoService
function getMoneyById(req, res, next) {
    algoService
        .getMoneyById(req.params.id)
        .then((cashes) => (cashes ? res.json(cashes) : res.sendStatus(404)))
        .catch((err) => next(err));
}
function returnMoney15M(req, res, next) {
    algoService
        .returnMoney15M(req.params.id)
        .then((data) => (data ? res.json(data) : res.sendStatus(404)))
        .catch((err) => next(err));
}

// Lancement de la fonction d'update du temps et de répartition de l'argent tous les X temps
// async function updateUserTime(req, res) {
//     try {
//         const playerId = req.params.playerid;
//         algoService.updateConnectionDate(playerId);
//     } catch (error) {
//         console.log(error);
//     }
// }

// 5efb1aad427e0d015970daf7
async function getMoney(req, res) {
    const playerId = req.params.playerid;
    try {
        const playerInfo = await User.findById(playerId);
        console.log(playerInfo);
    } catch (error) {
        console.log(error);
    }
}

module.exports = router;

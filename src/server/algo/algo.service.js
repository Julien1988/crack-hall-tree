/* eslint-disable no-var */
/* eslint-disable object-shorthand */
/* eslint-disable consistent-return */
/* eslint-disable require-await */
/* eslint-disable no-return-await */
/* eslint-disable no-unmodified-loop-condition */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
const db = require("../_helpers/db");
const {type} = require("os");
const Arbustum = db.Arbustum;
const User = db.User;
const Trees = db.Trees;
const updateConnectionAlgo = require("./updateconnectiondate");
import date from "date-and-time";

// https://www.npmjs.com/package/date-and-time
//var ObjectId = require("mongodb").ObjectID;

//get money for current user
async function getMoneyById(id) {
    try {
        let user = await User.findById(id);
        const id_player = user._id;
        //console.log("test1", id_player);
        let cashes = 0;
        cashes = await getMoney(id_player);

        user.money = cashes;
        await user.save();
        return cashes; //facultaif
    } catch (error) {
        return error;
    }
}
// calcul money
async function getMoney(id_player) {
    try {
        const arbust = await Arbustum.find({player_id: id_player});
        let myTable = [];
        arbust.map((tree) => {
            myTable.push(tree.leave);
        });
        const reducer = (accumulator, currentValue) =>
            accumulator + currentValue;
        const variable = myTable.reduce(reducer);
        return variable;
    } catch (error) {
        return error;
    }
}

// Calcule de l'argent à recevoir tous les X temps
async function updateConnectionDate(id) {
    try {
        console.log("updateConnectionDate");
        const user = await User.findById(id);
        const treesUser = await Trees.find({player_id: id});
        const leaveToGive = await updateConnectionAlgo(user, treesUser);
        if (leaveToGive != false) {
            const userMoney = Math.floor(
                (user.money + leaveToGive.totalUserLeaveToGive) /
                    leaveToGive.totalLeaveDivision,
            );
            const updateDateTime = new Date();
            const updateUser = await User.findById(id, function (err, doc) {
                doc.money = userMoney;
                doc.dateConnect = updateDateTime;
                doc.save();
                console.log("le prix de l'abre a été déduit");
            });
        } else {
            console.log("Il ne s'est pas assez écoulé de temps");
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getMoneyById,
    updateConnectionDate,
    getMoney,
};

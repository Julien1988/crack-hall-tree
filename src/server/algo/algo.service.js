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
import date from "date-and-time";
const updateConnectionAlgo = require("./updateconnectiondate");

// https://www.npmjs.com/package/date-and-time
//var ObjectId = require("mongodb").ObjectID;

module.exports = {
    getMoneyById,
    returnMoney15M,
    checkTime,
    updateConnectionDate,
};
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
async function returnMoney15M(id) {
    try {
        let user = await User.findById(id);
        let cashes = user.money;
        console.log(`cashes : ${cashes}`);
        cashes = cashes + cashes / 2;
        console.log(`cashes 2 : ${cashes}`);

        /* let setTime = createdDate.setMinutes(createdDate.getMinutes() + 1); // timestamp
            let createdDate2 = new Date(setTime); // Date object */
        //console.log(`time : ${createdDate2}`);
        user.money = cashes;
        await user.save();
        return cashes; //facultaif
    } catch (error) {
        return error;
    }
}
async function checkTime(id) {
    try {
        let user = await User.findById(id);
        do {
            console.log("===check===");
            //setTimeout(() => returnMoney15M({id: user.id}), 5000);
        } while (user.status);
    } catch (error) {
        console.log(error);
        //return error;
    }
}

// Toutes les quinze minutes dans la vraie vie, chaque joueur recevra une quantité de feuilles égale au total de chacun de ses arbres.
// Chaque heure dans la vraie vie, chaque joueur perd la moitié de ses feuilles.
async function updateConnectionDate(id) {
    try {
        console.log("== updateConnectionDate ==");
        const user = await User.findById(id);
        const treesUser = await Trees.find({player_id: id});
        const leaveToGive = await updateConnectionAlgo(user, treesUser);
        if (leaveToGive != false) {
            // console.log(leaveToGive.totalUserLeaveToGive);
            // console.log(leaveToGive.totalLeaveDivision);

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
                //console.log(updateUser);
            });
        } else {
            console.log("Il ne s'est pas assez écoulé de temps");
        }
    } catch (error) {
        console.log(error);
    }
}

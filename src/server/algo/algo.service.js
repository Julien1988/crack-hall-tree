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
const Arbustum = db.Arbustum;
const User = db.User;
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
        arbust.map(tree => {
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
async function updateConnectionDate(id) {
    try {
        let user = await User.findById(id);
        console.log(` users ${user.pseudo}`);
        const now = new Date();
        user.dateConnect = now;
        console.log(`connect `);
        await user.save();
    } catch (error) {
        console.log(error);
    }
}

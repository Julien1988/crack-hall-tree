/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../_helpers/db");
const Arbustum = db.Arbustum;
const User = db.User;

module.exports = {
    getById,
};
//time work
/* function sheete() {
    const sheetes = 0;
    let now = new Date();
    now.setMinutes(now.getMinutes() + 30); // timestamp
    now = new Date(now); // Date object
    console.log(`time : ${now}`);
}
{
            player_id: "5ef4e5295760d500a1a1b41b",
        }
 */
async function getById(id) {
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
async function upGrateMoney(id) {
    try {
        let user = await User.findById(id);
        let money = 0;
        //console.log("user money :", user.money);

        await user.save();
        return money; //facultaif
    } catch (error) {
        return error;
    }
}

/* async function get3Threes(req, res) {
    try {
        const threes = await Arbustum.find();
        const trois = [];
        do {
            const num = Math.floor(Math.random() * threes.length);
            const choice = threes[num];
            if (
                choice.id !== trois[choice.id] &&
                choice.circonf !== 0 &&
                choice.arbotag !== 0 &&
                choice.hauteur_totale !== 0 &&
                choice.diametre_cime !== 0
            ) {
                //const threefake = fakerName();
                trois.push(choice);
            }
        } while (trois.length < 3);
        res.json(trois);
    } catch (error) {
        res.send(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
    }
} */

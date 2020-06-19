/* eslint-disable no-extra-parens */
/* eslint-disable no-sync */
/* eslint-disable require-atomic-updates */
/* eslint-disable no-throw-literal */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../_helpers/db");
//import faker from "faker";
//const {response} = require("express");
const Arbustum = db.Arbustum;
const User = db.User;

module.exports = {
    getAll,
    get3Threes,
    update,
};
//time work
/* function sheete() {
    const sheetes = 0;
    let now = new Date();
    now.setMinutes(now.getMinutes() + 30); // timestamp
    now = new Date(now); // Date object
    console.log(`time : ${now}`);
}
 */
async function getAll(req, res) {
    try {
        const trees = await Arbustum.find();
        //res.json(threes.map(tree => tree.nom_complet));
        //console.log(trees);
        res.json(trees[0]);
    } catch (error) {
        res.send(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
    }
}

async function get3Threes(req, res) {
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
}

async function update(id, userParam) {
    const user = await User.findById(id);

    // validate
    if (!user) {
        throw "User not found";
    }
    /* if (
        user.pseudo !== userParam.pseudo &&
        (await User.findOne({pseudo: userParam.pseudo}))
    ) {
        throw `pseudo "${userParam.pseudo}" is already taken`;
    } */

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

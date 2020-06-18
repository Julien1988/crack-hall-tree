/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
const db = require("../_helpers/db");
//import faker from "faker";
//const {response} = require("express");
const Arbustum = db.Arbustum;
const Users = db.User;

module.exports = {
    getAll,
    getAllUsers,
    get3Threes,
    sheete,
};
//time work
function sheete() {
    const sheetes = 0;
    let now = new Date();
    now.setMinutes(now.getMinutes() + 30); // timestamp
    now = new Date(now); // Date object
    console.log(`time : ${now}`);
}

async function getAllUsers(req, res) {
    try {
        const users = await Users.find();
        res.json(users);
    } catch (error) {
        res.send(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
    }
}
async function getAll(req, res) {
    try {
        const threes = await Arbustum.find();
        res.json(threes.map(three => three.nom_complet));
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

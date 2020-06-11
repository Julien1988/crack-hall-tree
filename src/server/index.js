/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import express from "express";
import path from "path";
// import {nameByRace} from "fantasy-name-generator";

const {APP_PORT} = process.env;
const mongoose = require("mongoose");

const app = express();
const uri = "mongodb://mongo:27017/";
const options = {
    useNewUrlParser: true,
    dbName: "crack-hall-three",
    user: "dev",
    pass: "dev",
};

mongoose.connect(uri, options, function (error) {
    // Check error in initial connection. There is no 2nd param to the callback.
    console.log(" !!!! OK  !!!");
});
let getAllThrees = [];
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    // we're connected!
    console.log("==> CONNECTE <==");
    let threeSchema = new mongoose.Schema({
        nom_complet: String,
        arbotag: Number,
        geoloc: {
            lat: Number,
            lon: Number,
        },
        hauteur_totale: Number,
        diametre_cime: Number,
        circonf: Number,
        player_id: Number,
        player_color: Number,
        leave: Number,
        random_name: String,
        locked: Boolean,
        free: Boolean,
        wikilink: String,
        comment: String,
    });

    let Three = mongoose.model("threes", threeSchema);

    Three.find(function (err, threes) {
        if (err) return console.error(err);

        getAllThrees = threes;
        //  -/\\- ADD THE FUNCTION YOU NEED HERE -/\\-
    });
});

// ------------------------------------
// ------------------------------------

// -- CODE DE DISTRIBUITIONS DES ARBRES --

let getTreesId = [];

const dbModifie = (data) => {
    //console.log(data);
    data.forEach((element) => {
        console.log(element);
        let id = element;
        // __
        // __
        // ---- DECOMMENTER QUAND LA FONCTION SERA PRETE ----
        // __
        // __
        // Three.findById(id, function (err, doc) {
        //     if (err) {
        //         return console.log(err);
        //     }

        //     //doc.player_id = "AJOUTER L'ID DU JOUEUR";
        //     //doc.player_color = "AJOUTER LA COULEUR DU JOUEUR";
        //     //doc.free = false;
        //     // doc.save();
        // });
    });
};

// Attribution des 3 arbres

const getFreeTree = (newUserThreeIndex) => {
    getTreesId = [];

    for (let i = 0; i < 3; i++) {
        getTreesId.push(findUserTree[newUserThreeIndex[i]]._id);
    }
    // console.log(findUserTree[newUserThreeIndex[0]]._id);
    // console.log(findUserTree[newUserThreeIndex[1]]._id);
    // console.log(findUserTree[newUserThreeIndex[2]]._id);
    //console.log(getTreesId);
    dbModifie(getTreesId);
};

// Algo pour la distribution des arbres des nouveaux joueurs:

let newUserThreeIndex = [];
function getRandomInt(max) {
    let randomNumb;
    for (let i = 0; i < 3; i++) {
        randomNumb = Math.floor(Math.random() * Math.floor(max));
        if (
            randomNumb != newUserThreeIndex[0] &&
            randomNumb != newUserThreeIndex[1] &&
            randomNumb != newUserThreeIndex[2]
        ) {
            newUserThreeIndex.push(randomNumb);
        } else {
            i--;
        }
    }
    getFreeTree(newUserThreeIndex);
}

const findUserTree = [];

const newUserTree = () => {
    //Netoyage de la variable
    newUserThreeIndex = [];
    if (getAllThrees.length > 3) {
        getAllThrees.forEach((element) => {
            if (element.free === true) {
                findUserTree.push(element);
            }
        });
        getRandomInt(findUserTree.length);
        //console.log(findUserTree.length);
    } else {
        return console.log("Il n'y a plus d'arbes disponnible");
    }
};

// -- FIN -- CODE DE DISTRIBUITIONS DES ARBRES --

// ------------------------------------
// ------------------------------------

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log("==> TU ES DANS HELLO");
});

app.get("/newuser", (req, res) => {
    console.log("new user");
    newUserTree();
});

app.get("/allthrees", (req, res) => {
    console.log("==> TU ES DANS ALL-THREES");
    res.json(getAllThrees);
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

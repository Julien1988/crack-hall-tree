/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

// UTILE :
// // "mongodb://dev:dev@mongo:27017/crack-hall-three"

import express from "express";
import path from "path";
import {nameByRace} from "fantasy-name-generator";

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

    // enregistrement d'un arbre de test

    // ------------------------------------

    // let newThree = new Three({
    //     nom_complet: "Toto",
    //     arbotag: 2222,
    //     geoloc: {
    //         lat: 50.651528,
    //         lon: 5.580581,
    //     },
    //     hauteur_totale: 10,
    //     diametre_cime: 10,
    //     circonf: 10,
    //     player_id: 9999,
    //     player_color: 9999,
    //     leave: 9999,
    //     random_name: "Great Toto",
    //     locked: false,
    //     free: false,
    // });

    // newThree.save(function (err, newThree) {
    //     if (err) return console.error(err);
    // });

    // ------------------------------------

    // NAME GENERATOR :
    let randomName;
    let gender;
    let randomNumber;
    let randomRaceName;
    let randomRaceGender;
    let raceGender;
    let fantasyName;
    const raceArrayLength = 17;
    const raceArray = {
        0: ["angel", (gender = true)],
        1: ["cavePerson", (gender = true)],
        2: ["darkelf", (gender = true)],
        3: ["demon", (gender = false)],
        4: ["dragon", (gender = true)],
        5: ["drow", (gender = true)],
        6: ["dwarf", (gender = true)],
        7: ["elf", (gender = true)],
        8: ["fairy", (gender = true)],
        9: ["gnome", (gender = true)],
        10: ["goblin", (gender = false)],
        11: ["halfdemon", (gender = true)],
        12: ["halfling", (gender = true)],
        13: ["highelf", (gender = true)],
        14: ["highfairy", (gender = true)],
        15: ["ogre", (gender = false)],
        16: ["orc", (gender = false)],
    };

    const fantasyNameGenerator = (randomNumber) => {
        randomRaceName = raceArray[randomNumber][0];
        randomRaceGender = raceArray[randomNumber][1];
        raceGender = randomNumber % 2;
        // console.log(randomRaceName);
        // console.log(randomRaceGender);
        // console.log(raceGender);

        if (randomRaceGender == true) {
            if (raceGender == 0) {
                fantasyName = nameByRace(randomRaceName, {
                    gender: "female",
                });
            } else {
                fantasyName = nameByRace(randomRaceName, {
                    gender: "male",
                });
            }
        } else {
            fantasyName = nameByRace(randomRaceName);
        }
        console.log(fantasyName);
    };

    const getRandomInt = (max) => {
        randomNumber = Math.floor(Math.random() * Math.floor(max));
        //console.log(randomNumber);
        fantasyNameGenerator(randomNumber);
    };

    const nameGenerator = () => {
        getRandomInt(raceArrayLength);
    };

    //nameGenerator();

    // END

    //modification d'un arbre par ID

    // ------------------------------------
    // ------------------------------------

    // const test = () => {
    //     getAllThrees.forEach((element) => {
    //         //console.log(randomName);

    //         let id = element._id;

    //         Three.findById(id, function (err, doc) {
    //             nameGenerator();
    //             if (err) {
    //                 return console.log(err);
    //             }
    //             doc.random_name = fantasyName;
    //             doc.save();
    //         });
    //     });
    // };

    // ------------------------------------
    // ------------------------------------

    // const id = "5ed8b8f6b3bbfd00ce18d4c5";
    // Three.findById(id, function (err, doc) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     doc.leaves = true;
    //     doc.save();
    // });

    // ------------------------------------

    // END

    // Récupération de l'ensemble des Arbres

    // ------------------------------------

    Three.find(function (err, threes) {
        if (err) return console.error(err);

        getAllThrees = threes;

        //test();
    });
});

// ------------------------------------

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log("==> TU ES DANS HELLO");
});

app.use("/allthrees", (req, res) => {
    console.log("==> TU ES DANS ALL-THREES");
    res.json(getAllThrees);
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

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
const axios = require("axios");
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

    //modification d'un arbre par ID

    // ------------------------------------
    // ------------------------------------

    const test = () => {
        getAllThrees.forEach((element) => {
            //console.log(randomName);

            let id = element._id;

            Three.findById(id, function (err, doc) {
                //nameGenerator();
                if (err) {
                    return console.log(err);
                }
                // wikiUrl(element);
                doc.wikilink = wikiUrlVar;
                //console.log(wikiUrl);
                doc.save();
            });
        });
    };

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

    // ------------------------------------
    // ------------------------------------

    // Mondifcation des liens pour pointer vers wikipedia

    // let newUrl;
    // let wordConc;
    // let treeName;
    // let words;
    // let wordsArrayLength;
    // let wikiUrlVar;

    // const nextStep = () => {
    //     wikiUrlVar = "https://fr.wikipedia.org/wiki/" + wordConc;

    // };

    // const wikiUrl = (tree) => {

    //     treeName = tree.nom_complet;
    //     words = treeName.split(" ");
    //     wordsArrayLength = words.length;
    //     wordConc = words[0] + "_";
    //     for (let i = 1; i < wordsArrayLength; i++) {
    //         if (i < wordsArrayLength - 1) {
    //             wordConc += words[i] + "_";
    //         } else {
    //             wordConc += words[i];
    //             nextStep();
    //         }

    //     }
    // };

    // Récupération de l'ensemble des Arbres

    // ------------------------------------

    Three.find(function (err, threes) {
        if (err) return console.error(err);

        getAllThrees = threes;
        //wikiUrl();
        //test();
    });
});

// ------------------------------------
// ------------------------------------

// Api wikipedia

// app.use("/wikiapi/:treeName", (req, res) => {
//     let wikiUrl;
//     console.log("==> TU ES DANS WIKIAPI");
//     const nextStep = () => {
//         console.log(wordConc);
//         wikiUrl = "https://fr.wikipedia.org/wiki/" + wordConc;
//         console.log(wikiUrl);
//     };

//     let treeName = req.params.treeName;
//     let words = treeName.split(" ");
//     let wordsArrayLength = words.length;
//     let wordConc = words[0] + "_";
//     for (let i = 1; i < wordsArrayLength; i++) {
//         if (i < wordsArrayLength - 1) {
//             wordConc += words[i] + "_";
//         } else {
//             wordConc += words[i];
//             nextStep();
//         }

//         //console.log(wordConc);
//     }

// });

// END

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

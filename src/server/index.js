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

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log("==> TU ES DANS HELLO");
});

app.get("/allthrees", (req, res) => {
    console.log("==> TU ES DANS ALL-THREES");
    res.json(getAllThrees);
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

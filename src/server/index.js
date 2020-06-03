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
    });

    let Three = mongoose.model("threes", threeSchema);
    Three.find(function (err, threes) {
        if (err) return console.error(err);
        console.log(threes);
    });
});

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log("==> TU ES DANS HELLO");
});

app.get("/allthrees", (req, res) => {
    console.log("==> TU ES DANS ALL-THREES");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

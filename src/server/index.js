/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

// UTILE :
// // "mongodb://dev:dev@mongo:27017/"

import express from "express";
import path from "path";
//import bodyParser from "body-parser";

var MongoClient = require("mongodb").MongoClient;
const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log("tu es dans Hello");
});

app.get("/index/:param1", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);

    res.send(req.params);
});

app.get("/test", (req, res) => {
    MongoClient.connect("mongodb://dev:dev@mongo:27017/", function (
        err,
        mongo,
    ) {
        let db = mongo.db("crack-hall-three");

        let collection = db.collection("three");

        let threes = collection.find({
            //_id: ObjectId("5ece7015b467be4c63b04e4e"),
            circonf: {$all: [184]},
        });

        threes.toArray((err, test) => {
            if (err) {
                console.log("==> ERROR");
                res.send(err);
            } else {
                // Envoyer les données au format json
                console.log(test);
                res.json(test);
            }
        });

        mongo.close();
    });
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

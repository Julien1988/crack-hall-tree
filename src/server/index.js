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
import {ServerResponse} from "http";
import bodyParser from "body-parser";

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const {APP_PORT} = process.env;

const app = express();

// Connection URL :
const url =
    "mongodb://dev:dev@mongo:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false";
// const url = 'mongodb://$[username]:$[password]@$[hostlist]/$[database]?authSource=$[authSource]';
// mongodb://dev:dev@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false
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
            circonf: 184,
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

app.get("/test2", (req, res) => {
    MongoClient.connect("mongodb://dev:dev@mongo:27017/", function (
        err,
        mongo,
    ) {
        let db = mongo.db("crack-hall-three");

        let collection = db.collection("three");

        let threes = collection.find({
            circonf: 184,
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

app.get("/data", (req, res) => {
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        const db = client.db("crack-hall-three");
        let cursor = db.collection("three").find({});
        cursor.forEach(iterateFunc, errorFunc);
        client.close();
    });
    function iterateFunc(doc) {
        //console.log(doc);

        console.log(JSON.stringify(doc, null, 4));

        res.json(doc);
    }

    function errorFunc(error) {
        console.log("==> ERROR");
        console.log(error);
    }
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

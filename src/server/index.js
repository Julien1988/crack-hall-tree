/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */
//require("rootpath");
import express from "express";
import path from "path";
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
// import {nameByRace} from "fantasy-name-generator";

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

const {APP_PORT} = process.env;

app.use("/trees", require("./trees/trees.controller"));

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

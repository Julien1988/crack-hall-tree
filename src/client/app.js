/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
import ReactDOM from "react-dom";

import HelloWorld from "./components/hello";
// let db = require("../../data/db.json");
// console.log(db[0]);

ReactDOM.render(<HelloWorld name="Hello" />, document.querySelector("#app"));
console.log("coucou");

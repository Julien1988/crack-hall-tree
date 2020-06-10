/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
import ReactDOM from "react-dom";

import Map from "./components/map";

import "./style/map.scss";

ReactDOM.render(<Map />, document.querySelector("#mapid"));

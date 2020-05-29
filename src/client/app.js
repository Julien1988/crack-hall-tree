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

ReactDOM.render(<HelloWorld name={"Hello"} />, document.querySelector("#app"));

const myHeaders = new Headers();

const myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
};

const myRequest = new Request("/test", myInit);

fetch(myRequest).then(response => {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
        response.json().then(json => {
            // traitement du JSON
            console.log(json);
        });
    }
    console.log("Oops, nous n'avons pas du JSON!");
});

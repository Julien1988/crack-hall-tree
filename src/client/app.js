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

const fetchPromise = new Request("/test", myInit);

const nextFunction = myGetArray => {
    console.log(myGetArray);
    //let elementInvalides = 0;
    const filter = obj => {
        if (
            obj.y_lambert72 !== null &&
            obj.arbotag !== null &&
            obj.date_donnees !== null &&
            obj.x_lambda !== null &&
            obj.geoloc.lat !== null &&
            obj.geoloc.lon !== null &&
            obj.hauteur_totale !== null &&
            obj.x_lambert72 !== null &&
            obj.y_phi !== null &&
            obj.nom_complet !== null &&
            obj.diametre_cime !== null &&
            obj.circonf !== null
        ) {
            return true;
        }
        //elementInvalides++;
        return false;
    };
    // Nettoyage ddes informations en excluant les valeurs null
    const arrById = myGetArray.filter(filter);
    const arrByIdLength = arrById.length;

    for (let i = 0; i < arrByIdLength; i++) {
        document.querySelector(
            "#test",
        ).innerHTML += `<li> ${arrById[i].nom_complet} </li>`;
    }
    console.log(arrById);
};

fetch(fetchPromise).then(response => {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
        const myGetArray = [];
        response.json().then(json => {
            // traitement du JSON

            json.forEach(element => {
                myGetArray.push(element);
            });

            nextFunction(myGetArray);
        });
    }
    console.log("Oops, nous n'avons pas du JSON!");
});

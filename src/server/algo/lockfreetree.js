const db = require("../_helpers/db");
const {doc} = require("prettier");
const Trees = db.Trees;
const User = db.User;
import {insideCircle} from "geolocation-utils";

const lockFreeTreeAlgo = (playerInfo, treeInfo) => {
    console.log(playerInfo, treeInfo);
    const treeLeave = treeInfo.leave;
    const teeGeoloc = treeInfo.geoloc;
    const center = {lat: teeGeoloc.lat, lon: teeGeoloc.lon};
    const radius = 100;
    console.log(center);

    // TODO ALGO
};

// const center = {lat: getTree.geoloc.lat, lon: getTree.geoloc.lon};
// const radius = 100; // meters

// const inCercleRadius = insideCircle(
//     {lat: element.geoloc.lat, lon: element.geoloc.lon},
//     center,
//     radius,
// );

// Chaque fois qu'il le souhaite, un joueur peut verrouiller un arbre en payant la formule suivante: [valeur de l'arbre] × 10 + ([valeur de tous les arbres dans un rayon de 100 m] × [nombre de joueurs dans un rayon de 100 m]) - ([valeur de tous les arbres des joueurs dans un rayon de 100 m] / [nombre de joueurs dans un rayon de 100 m]). Un arbre verrouillé ne peut pas être acheté par un autre joueur.

module.exports = lockFreeTreeAlgo;

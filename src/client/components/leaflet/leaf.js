/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-no-literals */
/* creation du model button pour l'app arbre
 * /src/components/leaflet/fleaf.js - carte du jeux
 * code by sarahG4000 for becode formation
 * creation for montagne
 * creat 25/05/2020
 */
import React, {useState, useEffect} from "react";
import axios from "axios";
// import PropTypes from "prop-types";
import {Map, Marker, Popup, TileLayer, Circle} from "react-leaflet";
import {insideCircle} from "geolocation-utils";

import "./scss/leaflet.scss";
import Leaflet from "leaflet";
import L from "leaflet";

import marker from "leaflet/dist/images/marker-icon.png";
import marker2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "react-leaflet-markercluster/dist/styles.min.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: marker2x,
    iconUrl: marker,
    shadowUrl: markerShadow,
});

const position = [50.65156, 5.5806785];
const myGetArray = [];

// const myColourRed = "#d81205";
// const myColourYellow = "#f1ca08";
// const myColourGreen = "#0ca702";
// const myColourDark = "#030303";
// const myColourGrey = "#737171";
// const myColourOrange = "#e56704";
// const myColourPurple = "#8002de";
// const myColourWhite = "#fcfbfc";
// const myColourDefault = "#03f3d2";

// if (colors.player_color === "red") {
//     myColorista = myColourRed;
// } else if (colors.player_color === "yellow") {
//     myColorista = myColourYellow;
// } else if (colors.player_color === "green") {
//     myColorista = myColourGreen;
// } else if (colors.player_color === "dark") {
//     myColorista = myColourDark;
// } else if (colors.player_color === "grey") {
//     myColorista = myColourGrey;
// } else if (colors.player_color === "orange") {
//     myColorista = myColourOrange;
// } else if (colors.player_color === "purple") {
//     myColorista = myColourPurple;
// } else if (colors.player_color === "white") {
//     myColorista = myColourWhite;
// } else {
//     myColorista = myColourDefault;
// }

const LeafMyMap = () => {
    // Stoque l'ensemble des arbres
    const [allTrees, setAllTrees] = useState([]);
    // Stoque le centre geographique
    const handelbuyTree = args => {
        console.log(args);
    };

    // Stoque l'ensemble des arbres
    const [allTrees, setAllTrees] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost/trees/alltrees")
            .then(res => setAllTrees(res.data))
            .catch(erreur => {
                console.warn(erreur); // c'est la ligne 71
            });
    }, []);

    const geolocCircle = getCenter => {
        allTrees.forEach(element => {
            const center = {lat: getCenter[0], lon: getCenter[1]};
            const radius = 500;

            const testCircleTree = insideCircle(
                {lat: element.geoloc.lat, lon: element.geoloc.lon},
                center,
                radius,
            );

            if (testCircleTree === true) {
                // modifie la valeur de la variable si pas de commentaire enregistré sur l'abre
                if (element.comment == null) {
                    element.comment = "Pas de commentaire";
                    myGetArray.push(element);
                }

                // vérifie si l'arbre est achetable et dispo
                if (element.free === true) {
                    element.free = "Buy Me !";
                    element.buyButton = "href-buy";
                    // vérifie si l'abre est achetable et appartient à un joueur qui ne l'a pas encore lock
                } else if (element.free === false && element.locked === false) {
                    element.free = "Tu vas devoir payer plus cher";
                    element.buyButton = "href-buy-cher";

                    // Vérifie si l'abre n'est plus achetable car a été lock par un joueur
                } else if (element.free === false && element.locked === true) {
                    element.free = "Tu ne peux pas acheter cet arbre";
                    element.buyButton = "Non non non";

                    // valeur de callback
                } else {
                    myGetArray.push(element);
                }
            }

            console.log("chargement des données en cours... Wait for it !");
        });
    };

    console.log(allTrees);

    let myColorista;

    myColorista = allTrees.map(itemColor => {
        if (itemColor.player_color === null) {
            myColorista = "#03f3d2";
            console.log(myColorista);
        }
    });

    const markerHtmlStyles = `
        background-color: ${myColorista};
        width: 3rem;
        height: 3rem;
        display: block;
        left: -1.5rem;
        top: -1.5rem;
        position: relative;
        border-radius: 3rem 3rem 0;
        transform: rotate(45deg);
        border: 1px solid #FFFFFF`;

    const icon = Leaflet.divIcon({
        className: "my-custom-pin",
        iconAnchor: [0, 24],
        labelAnchor: [-6, 0],
        popupAnchor: [0, -36],
        html: `<span style="${markerHtmlStyles}" />`,
    });

    if (click === true) {
        return (
            <Map
                className={"leaflet-container"}
                center={position}
                zoom={13}
                onClick={handleClick}>
                <TileLayer
                    url={
                        "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                    }
                    attribution={
                        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    }
                />
                <MarkerClusterGroup>
                    <Circle center={centerGeoloc} radius={radiusGeoloc} />

                    {allTrees.map(item => (
                        <React.Fragment key={item._id}>
                            <Marker
                                icon={icon}
                                position={[item.geoloc.lat, item.geoloc.lon]}>
                                <Popup>
                                    <div
                                        className={[
                                            "title",
                                            "modal-card",
                                            "sg-tree",
                                        ].join(" ")}>
                                        <header className={"modal-card-head"}>
                                            <p
                                                className={
                                                    "modal-card-title is-6 is-spaced"
                                                }>
                                                <strong>
                                                    {"Profile tree"}
                                                </strong>
                                            </p>
                                        </header>
                                        <section className={"modal-card-body"}>
                                            <p className={"subtitle is-5"}>
                                                <strong>
                                                    {"Nom de l'arbre:"}
                                                </strong>{" "}
                                                {item.random_name}{" "}
                                            </p>

                                            <p className={"subtitle is-5"}>
                                                <strong>
                                                    {"Nombre de feuilles :"}
                                                </strong>{" "}
                                                {item.leave}
                                            </p>

                                            <a
                                                className={"subtitle is-5"}
                                                href={item.wikilink}>
                                                {"Lien wikipédia"}
                                            </a>

                                            <p className={"subtitle is-5"}>
                                                <strong>
                                                    {"Commentaire :"}
                                                </strong>{" "}
                                                {item.comment}
                                            </p>

                                            <p className={"subtitle is-5"}>
                                                <strong>{"lat:"}</strong>{" "}
                                                {item.geoloc.lat} <br />{" "}
                                                <strong>{"long:"}</strong>
                                                {item.geoloc.lon}
                                            </p>
                                        </section>
                                        <footer className={"modal-card-foot"}>
                                            <button
                                                className={
                                                    "button is-success is-small is-pulled-right"
                                                }
                                                label={"Close"}
                                                // {() => this.handleClick(id)}
                                                onClick={() =>
                                                    handelbuyTree(
                                                        item.buyButton,
                                                    )
                                                }>
                                                {"Buy Me !"}
                                            </button>
                                        </footer>
                                    </div>
                                </Popup>
                            </Marker>
                        </React.Fragment>
                    ))}
                </MarkerClusterGroup>
            </Map>
        );
    }
    return (
        <Map className={"leaflet-container"} center={position} zoom={13}>
            <TileLayer
                url={
                    "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                }
                attribution={
                    '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                }
            />
            <MarkerClusterGroup>
                {allTrees.map(item => (
                    <React.Fragment key={item._id}>
                        <Marker
                            icon={icon}
                            position={[item.geoloc.lat, item.geoloc.lon]}>
                            <Popup>
                                <div
                                    className={[
                                        "title",
                                        "modal-card",
                                        "sg-tree",
                                    ].join(" ")}>
                                    <header className={"modal-card-head"}>
                                        <p
                                            className={
                                                "modal-card-title is-6 is-spaced"
                                            }>
                                            <strong>{"Profile tree"}</strong>
                                        </p>
                                    </header>
                                    <section className={"modal-card-body"}>
                                        <p className={"subtitle is-5"}>
                                            <strong>{"Nom de l'arbre:"}</strong>{" "}
                                            {item.random_name}{" "}
                                        </p>

                                        <p className={"subtitle is-5"}>
                                            <strong>
                                                {"Nombre de feuilles :"}
                                            </strong>{" "}
                                            {item.leave}
                                        </p>

                                        <a
                                            className={"subtitle is-5"}
                                            href={item.wikilink}>
                                            {"Lien wikipédia"}
                                        </a>

                                        <p className={"subtitle is-5"}>
                                            <strong>{"Commentaire :"}</strong>{" "}
                                            {item.comment}
                                        </p>

                                        <p className={"subtitle is-5"}>
                                            <strong>{"lat:"}</strong>{" "}
                                            {item.geoloc.lat} <br />{" "}
                                            <strong>{"long:"}</strong>
                                            {item.geoloc.lon}
                                        </p>
                                    </section>
                                    <footer className={"modal-card-foot"}>
                                        <button
                                            className={
                                                "button is-success is-small is-pulled-right"
                                            }
                                            label={"Close"}
                                            // {() => this.handleClick(id)}
                                            onClick={() =>
                                                handelbuyTree(item.buyButton)
                                            }>
                                            {"Buy Me !"}
                                        </button>
                                    </footer>
                                </div>
                            </Popup>
                        </Marker>
                    </React.Fragment>
                ))}
            </MarkerClusterGroup>
        </Map>
    );
};

export default LeafMyMap;

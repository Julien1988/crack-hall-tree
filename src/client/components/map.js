/* becodeorg/mwenbwa
 *
 * /src/client/components/map.js - Map Component
 *
 
 */

import React, {useState, useCallback, useEffect} from "react";

import {map, latLng} from "leaflet";
import {Map, TileLayer, Marker, Popup, Circle, layerPoint} from "react-leaflet";
import {
    toLatLon,
    toLatitudeLongitude,
    headingDistanceTo,
    moveTo,
    insidePolygon,
    insideCircle,
} from "geolocation-utils";

const position = [50.65156, 5.5806785];
let myGetArray = [];
let test;

let treeSlectorVar = [];

const App = () => {
    // Stope la recupération des données des arbres
    const [getData, setGetData] = useState(true);
    // Stoque l'ensemble des arbres
    const [allTrees, setAllTrees] = useState([]);
    // Stoque le centre geographique
    const [centerGeoloc, setCenterGeoloc] = useState([50.65156, 5.5806785]);
    //stoque la taille du rayon du cercle
    const [radiusGeoloc, setRadiusGeoloc] = useState(100);
    // Stoque la lat et long au click
    const [geolocClick, setGeolocClick] = useState(undefined);

    const [click, setClick] = useState(false);

    const [treesToShow, setTreesToShow] = useState([]);

    fetch("/allthrees").then((response) => {
        response.json().then((json) => {
            // traitement du JSON
            if (getData === true) {
                setGetData(false);
                setAllTrees(json);
            }
        });
    });

    const geolocCircle = (getCenter) => {
        allTrees.forEach((element) => {
            const center = {lat: getCenter[0], lon: getCenter[1]};
            const radius = 500;

            const testCircleTree = insideCircle(
                {lat: element.geoloc.lat, lon: element.geoloc.lon},
                center,
                radius,
            );

            if (testCircleTree === true) {
                myGetArray.push(element);
            }

            console.log("chargement des données en cours... Wait for it !");
        });
    };

    const handleClick = (e) => {
        test = [e.latlng.lat, e.latlng.lng];
        if (click === false) {
            myGetArray = [];
            geolocCircle(test);
            setClick(true);
        } else {
            setClick(false);
        }
    };

    if (click === true) {
        return (
            <Map center={position} zoom={13} onClick={handleClick}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                <Circle center={centerGeoloc} radius={radiusGeoloc} />

                {myGetArray.map((item) => (
                    <React.Fragment key={item._id}>
                        <Marker position={[item.geoloc.lat, item.geoloc.lon]}>
                            <Popup>
                                Nom de l'arbre: {item.random_name}
                                <br />
                                Nombre de feuilles : {item.leave}
                                <br /> <a href={item.wikilink}> Lien wiki</a>
                                <br /> Commentaire : {item.comment}
                                <br /> lat: {item.geoloc.lat} long:
                                {item.geoloc.lon}
                            </Popup>
                        </Marker>
                    </React.Fragment>
                ))}
            </Map>
        );
    } else {
        return (
            <Map center={position} zoom={13} onClick={handleClick}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </Map>
        );
    }
};

export default App;

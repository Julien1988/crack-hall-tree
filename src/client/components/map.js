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
const myGetArray = [];
const treeSlectorVar = [];
const freeTreeInCercle = [];
const notFreeTreeInCercle = [];
let numberOfFreeTreeInCercle;
let numberOfNotFreeTreeInCercle;

// Var temporaire
// getTreeId
let myGetArrayLength = 20;

const App = () => {
    const [data, setData] = useState([]);
    const [centerGeoloc, setCenterGeoloc] = useState([50.65156, 5.5806785]);
    const [radiusGeoloc, setRadiusGeoloc] = useState(100);

    useEffect(() => {
        fetch("/allthrees").then((response) => {
            response.json().then((json) => {
                // traitement du JSON
                json.forEach((element) => {
                    myGetArray.push(element);
                });

                for (let i = 1; i < myGetArrayLength; i++) {
                    if (myGetArray[i].comment == null) {
                        myGetArray[i].comment = "Pas de commentaire";

                        treeSlectorVar.push(myGetArray[i]);
                    }
                    treeSlectorVar.push(myGetArray[i]);
                }
                setData(treeSlectorVar);

                //console.log(data.length);
                // ----------------------------------------------------
                // ----------------------------------------------------

                // ----------------------------------------------------
                // ----------------------------------------------------

                // Envois vers le back

                const getTreeIdServer = (data) => {
                    fetch("/tree/" + data).then((response) => {
                        console.log(data);
                        console.log("coucou");
                    });
                };

                // getTreeIdServer(freeTreeInCercle[0]);

                // Vérification de la présence des arbres dans un rayon définis

                const center = {lat: position[0], lon: position[1]};

                const radius = radiusGeoloc;

                let isInRadius = [];
                // let isInRadiusIndex;
                const isInRadiusCheck = (lat, lon, index, isFree, isLocked) => {
                    isInRadius.push([
                        insideCircle({lat: lat, lon: lon}, center, radius),
                        index,
                        isFree,
                        isLocked,
                    ]);
                    //console.log(isInRadius);
                };

                const isInRadiusLoopValidation = (data) => {
                    //console.log(data);
                    for (let i = 0; i < data.length; i++) {
                        if (data[i][0] === true && data[i][0] == true) {
                            freeTreeInCercle.push(data[i][1]);
                        } else if (data[i][0] === true && data[i][0] == false) {
                            notFreeTreeInCercle.push(data[i][1]);
                        }
                    }
                    numberOfFreeTreeInCercle = freeTreeInCercle.length;
                    numberOfNotFreeTreeInCercle = notFreeTreeInCercle.length;

                    // envois vers le back
                    getTreeIdServer(freeTreeInCercle);

                    // console.log(freeTreeInCercle);
                    // console.log(notFreeTreeInCercle);
                    // console.log(numberOfFreeTreeInCercle);
                    // console.log(numberOfNotFreeTreeInCercle);
                };

                const isInRadiusLoop = (data) => {
                    let i;
                    for (i = 0; i < data.length; i++) {
                        isInRadiusCheck(
                            data[i].geoloc.lat,
                            data[i].geoloc.lon,
                            data[i]._id,
                            data[i].free,
                            data[i].locked,
                        );
                    }
                    if ((i = data.length)) {
                        //console.log(isInRadius);
                        isInRadiusLoopValidation(isInRadius);
                    }
                };

                isInRadiusLoop(data);
                console.log(data);

                // // ----------------------------------------------------
                // // ----------------------------------------------------
            });
        });
    });

    // Récupération de la latitude et longitude au click sur la carte

    const handleClick = (e) => {
        console.log(e.latlng);
    };

    if (data.length > 0) {
        return (
            <Map center={position} zoom={13} onClick={handleClick}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Circle center={centerGeoloc} radius={radiusGeoloc} />
                {data.map((item) => (
                    <React.Fragment>
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
            <Map center={position} zoom={10}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </Map>
        );
    }
};

export default App;

// SAVE

/* becodeorg/mwenbwa
 *
 * /src/client/components/map.js - Map Component
 *
 
 */

// import React, {useState, useCallback, useEffect} from "react";

// import {Map, TileLayer, Marker, Popup, Circle} from "react-leaflet";
// //import MakerTools from "./tools/marker";

// const position = [50.65156, 5.5806785];
// const myGetArray = [];
// const treeSlectorVar = [];
// const test = [
//     [51.505, -0.09],
//     [51.506, -0.09],
//     [51.507, -0.09],
// ];
// // console.log(test);
// // test.map((item) => {
// //     console.log(item[0], item[1]);
// // });

// const App = () => {
//     const [data, setData] = useState([]);
//     const [centerGeoloc, setCenterGeoloc] = useState([50.65156, 5.5806785]);
//     const [radiusGeoloc, setRadiusGeoloc] = useState(100);
//     useEffect(() => {
//         fetch("/allthrees").then((response) => {
//             response.json().then((json) => {
//                 // traitement du JSON
//                 json.forEach((element) => {
//                     myGetArray.push(element);
//                 });

//                 for (let i = 1; i < 20; i++) {
//                     treeSlectorVar.push(myGetArray[i]);
//                 }
//                 setData(treeSlectorVar);

//                 console.log(data);
//             });
//         });
//     });
//     if (data.length > 0) {
//         return (
//             <Map center={position} zoom={13}>
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 />
//                 <Circle center={centerGeoloc} radius={radiusGeoloc} />
//                 {data.map((item) => (
//                     <React.Fragment>
//                         <Marker position={[item.geoloc.lat, item.geoloc.lon]}>
//                             <Popup>
//                                 A pretty CSS3 popup.
//                                 <br />
//                                 Easily customizable.
//                             </Popup>
//                         </Marker>
//                     </React.Fragment>
//                 ))}
//             </Map>
//         );
//     } else {
//         return (
//             <Map center={position} zoom={10}>
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 />
//             </Map>
//         );
//     }
// };

// export default App;

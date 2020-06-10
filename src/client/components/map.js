/* becodeorg/mwenbwa
 *
 * /src/client/components/map.js - Map Component
 *
 
 */

import * as React from "react";

import {Map, TileLayer, Marker, Popup} from "react-leaflet";
import MakerTools from "./tools/marker";

const position = [51.505, -0.09];
const myGetArray = [];
let treeSlectorVar = [];
const test = [
    [51.505, -0.09],
    [51.506, -0.09],
    [51.507, -0.09],
];
// console.log(test);
// test.map((item) => {
//     console.log(item[0], item[1]);
// });

const App = () => {
    fetch("/allthrees").then((response) => {
        response.json().then((json) => {
            // traitement du JSON
            json.forEach((element) => {
                myGetArray.push(element);
            });
            //console.log(myGetArray);
            //treeSlectorVar.push(myGetArray);
        });
    });
    return (
        <Map center={position} zoom={16}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <React.Fragment>
                {test.map((item) => (
                    <MakerTools position={[item[0], item[1]]} />
                ))}
            </React.Fragment>
        </Map>
    );
};

export default App;

// return (
//     <Map center={position} zoom={16}>

//         <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <MakerTools position={position} />
//         {/* <MakerTools position={[51.506, -0.09]} /> */}
//     </Map>
// );

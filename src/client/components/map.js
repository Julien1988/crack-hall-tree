/* becodeorg/mwenbwa
 *
 * /src/client/components/map.js - Map Component
 *
 
 */

import * as React from "react";
import "../routing";

import {Map, TileLayer, Marker, Popup} from "react-leaflet";

const position = [51.505, -0.09];
const myGetArray = [];
const App = () => {
    fetch("/allthrees").then((response) => {
        response.json().then((json) => {
            // traitement du JSON
            json.forEach((element) => {
                myGetArray.push(element);
            });
            console.log(myGetArray);
        });
    });
    return (
        <Map center={position} zoom={16}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup.
                    <br />
                    Easily customizable.
                </Popup>
            </Marker>
        </Map>
    );
};

export default App;

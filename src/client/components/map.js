/* becodeorg/mwenbwa
 *
 * /src/client/components/map.js - Map Component
 *
 
 */

import React, {Component} from "react";

import {Map, TileLayer, Marker, Popup} from "react-leaflet";
//import "leaflet/dist/leaflet.css";

const position = [51.505, -0.09];
const App = (
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

export default App;

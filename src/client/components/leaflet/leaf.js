/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-no-literals */
import * as React from "react";
//
//import {render} from "react-dom";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./leaflet.css";
import L from "leaflet";
import marker from "leaflet/dist/images/marker-icon.png";
import marker2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: marker2x,
    iconUrl: marker,
    shadowUrl: markerShadow,
});

const Leaf = () => {
    const position = [51.505, -0.09];
    return (
        <Map className={"map"} center={position} zoom={13}>
            <TileLayer
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                attribution={
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }
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
export default Leaf;

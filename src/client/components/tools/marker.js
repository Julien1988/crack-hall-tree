import * as React from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";

const MakerTools = ({position}) => (
    <Marker position={position}>
        <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
        </Popup>
    </Marker>
);
export default MakerTools;

// const MakerTools = ({position}) => (
//     <Marker position={position}>
//         <Popup>
//             A pretty CSS3 popup.
//             <br />
//             Easily customizable.
//         </Popup>
//     </Marker>
// );

/* becodeorg/mwenbwa
 *
 * /src/client/components/map.js - Map Component
 *
 
 */

import React, {useState, useCallback, useEffect} from "react";

import {Map, TileLayer, Marker, Popup, Circle} from "react-leaflet";

const position = [50.65156, 5.5806785];
const myGetArray = [];
const treeSlectorVar = [];
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

                for (let i = 1; i < 20; i++) {
                    treeSlectorVar.push(myGetArray[i]);
                }
                setData(treeSlectorVar);

                console.log(data);
            });
        });
    });
    if (data.length > 0) {
        return (
            <Map center={position} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Circle center={centerGeoloc} radius={radiusGeoloc} />
                {data.map((item) => (
                    <React.Fragment key={item.arbotag}>
                        <Marker position={[item.geoloc.lat, item.geoloc.lon]}>
                            <Popup>
                                Nom de l'arbre: {item.random_name}
                                <br />
                                Nombre de feuilles : {item.leave}
                                <br /> <a href={item.wikilink}> Lien wiki</a>
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

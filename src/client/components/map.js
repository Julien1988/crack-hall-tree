/* becodeorg/mwenbwa
 *
 * /src/client/components/map.js - Map Component
 *
 
 */

import React, {useState, useCallback, useEffect} from "react";

import {Map, TileLayer, Marker, Popup, Circle} from "react-leaflet";
//import MakerTools from "./tools/marker";

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
    useEffect(() => {
        fetch("/allthrees").then((response) => {
            response.json().then((json) => {
                // traitement du JSON
                json.forEach((element) => {
                    myGetArray.push(element);
                    //console.log(element);
                });
                // setData(myGetArray[0]);
                for (let i = 1; i < 20; i++) {
                    treeSlectorVar.push(myGetArray[i]);
                }
                setData(treeSlectorVar);

                // data.map((element) => {
                //     // console.log(element);
                // });
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
                <Circle center={[50.65156, 5.5806785]} radius={100} />
                {data.map((item) => (
                    <React.Fragment>
                        <Marker position={[item.geoloc.lat, item.geoloc.lon]}>
                            <Popup>
                                A pretty CSS3 popup.
                                <br />
                                Easily customizable.
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

// import React, {useState, useCallback, useEffect} from "react";

// import {Map, TileLayer, Marker, Popup} from "react-leaflet";
// //import MakerTools from "./tools/marker";

// const position = [51.505, -0.09];
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
//     const [data, setData] = useState([null]);
//     useEffect(() => {
//         fetch("/allthrees").then((response) => {
//             response.json().then((json) => {
//                 // traitement du JSON
//                 json.forEach((element) => {
//                     myGetArray.push(element);
//                     //console.log(element);
//                 });
//                 // setData(myGetArray[0]);
//                 for (let i = 1; i < 20; i++) {
//                     treeSlectorVar.push(myGetArray[i]);
//                 }
//                 setData(treeSlectorVar);
//                 //console.log(data);
//                 data.map((element) => {
//                     console.log(element);
//                 });
//             });
//         });
//     });
//     return (
//         <Map center={position} zoom={16}>
//             <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             />
//             {test.map((item) => (
//                 <React.Fragment>
//                     <Marker position={[item[0], item[1]]}>
//                         <Popup>
//                             A pretty CSS3 popup.
//                             <br />
//                             Easily customizable.
//                         </Popup>
//                     </Marker>
//                 </React.Fragment>
//             ))}
//         </Map>
//     );
// };

// export default App;

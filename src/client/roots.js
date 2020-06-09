/* eslint-disable react/jsx-no-undef */
/* eslint-disable class-methods-use-this */
import React from "react";
import Leaflet from "./components/leaflet/leaflet";
import Navbar from "./components/profil/navbar";
import "./roots.css";
//import Userinfos from "./components/profil/userinfo";

export default class RootComponent extends React.Component {
    render() {
        return (
            <main>
                <div className={"rigth"}>
                    <Leaflet />
                </div>
                <div className={"left"}>
                    <Navbar />
                </div>
            </main>
        );
    }
}

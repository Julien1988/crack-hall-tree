/* eslint-disable react/jsx-no-undef */
/* eslint-disable class-methods-use-this */
import React from "react";
// import Leaflet from "./components/leaflet/leaflet";
import HomeConnect from "./components/profil/navbar";
import "./components/scss/roots.scss";
//import Userinfos from "./components/profil/userinfo";

export default class RootComponent extends React.Component {
    render() {
        return (
            <div className={"bom"}>
                <HomeConnect />
                {/* <Leaflet /> */}
            </div>
        );
    }
}

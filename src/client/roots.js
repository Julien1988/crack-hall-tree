/* eslint-disable react/jsx-no-undef */
/* eslint-disable class-methods-use-this */
import React from "react";
import Leaf from "./components/leaflet/leaf";
import HomeConnect from "./components/profil/navbar";
import "./components/scss/roots.scss";
//import Userinfos from "./components/profil/userinfo";

const RootComponent = () => (
    <div>
        <HomeConnect />
        <Leaf />
    </div>
);

export default RootComponent;

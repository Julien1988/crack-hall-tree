/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-handler-names */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/button-has-type */
/* becodeorg/mwenbwa
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

// import * as React from "react";
import Userinfos from "./userinfo";
// import Login from "./login";
// import Logup from "./logup";

import "./scss/navbar.scss";

import React, {useState, useCallback} from "react";
import ModalHome from "../modal/modalacc";

const HomeConnect = () => {
    const [modalShowHome, setModalShowHome] = useState(true);

    const handleCloseModalHome = useCallback(() => {
        setModalShowHome(false);
    }, [setModalShowHome]);

    return (
        <div
            className={[
                "columns",
                "is-mobile",
                "is-multiline",
                "is-centered",
                "mt-5",
            ].join(" ")}>
            <div>
                <div>
                    <Userinfos />
                </div>
            </div>
            <ModalHome showHome={modalShowHome} onHide={handleCloseModalHome} />
        </div>
    );
};

export default HomeConnect;

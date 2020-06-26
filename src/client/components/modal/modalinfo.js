/* creation du model button pour l'app arbre
 * /src/components/modal/modal.js - creation du modal
 * code by sarahG4000 for becode formation
 * creation for montagne
 * creat 25/05/2020
 */
import React, {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import PropTypes from "prop-types";

import axios from "axios";
//import SignupForm from "../tools/from";

// import Logup from "../profil/logup";

const containerStyles = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    zIndex: 1100,
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.5)",
};

const ModalInfo = ({showInfo = false, onHide}) => {
    // const [currentId, setCurrentId] = useState();
    const [state, setState] = useState();
    const [userInfo, setUserInfo] = useState([]);
    const [requestDone, setRequestDone] = useState(false);
    useEffect(() => {
        setState(localStorage.getItem("tokenUserId").replace(/"/g, ""));

        console.warn(state);
        const getRequest = `http://localhost/users/${state}`;
        console.warn(getRequest);
        if (getRequest !== undefined && requestDone !== true) {
            axios
                .get(getRequest)
                .then(res => setUserInfo(res.data))
                .catch(erreur => {
                    console.warn(erreur);
                });

            if (userInfo.id !== undefined) {
                setRequestDone(true);
            }
        }
    });
    console.warn(userInfo);

    if (showInfo === true) {
        return createPortal(
            <div style={containerStyles}>
                <div className={"title modal-card"}>
                    <header className={"modal-card-head"}>
                        <p className={"modal-card-title"}>{"Profile"}</p>
                        <button
                            className={
                                "button is-success is-small is-pulled-right"
                            }
                            label={"Close"}
                            onClick={onHide}>
                            {"X"}
                        </button>
                    </header>
                    <section className={"modal-card-body"}>
                        <div className={""}>
                            <p className={"title is-4"}>{"Name : "}</p>
                            <p className={"subtitle is-5"}>{userInfo.pseudo}</p>
                            <p className={"title is-4"}>{"Email : "}</p>
                            <p className={"subtitle is-5"}>{userInfo.email}</p>
                            <p className={"title is-4"}>{"Color : "}</p>
                            <p className={"subtitle is-5"}>{userInfo.color}</p>
                            <p className={"title is-4"}>{" Money : "}</p>
                            <p className={"subtitle is-5"}>{"8000 £"}</p>
                            <p className={"title is-4"}>{"Classement  : "}</p>
                            <p className={"subtitle is-5"}>{" 2"}</p>
                            <p className={"title is-4"}>
                                {"Historique des achats :"}
                            </p>

                            <ul className={"subtitle is-5"}>
                                <li>{"monogos"}</li>
                                <li>{"popos"}</li>
                            </ul>

                            <p className={"subtitle is-5"}>
                                <a href={"#"}>{"Wikipedia"}</a>
                            </p>
                            <p className={"title is-4"}>{"Commentaires :"}</p>

                            <ul className={"subtitle is-5"}>
                                <li>{"comments"}</li>
                                <li>{"comments"}</li>
                            </ul>

                            <p className={"title is-4"}>{"Date Creation : "}</p>
                            <p className={"subtitle is-5"}>
                                {userInfo.createdDate}
                            </p>
                        </div>
                    </section>
                    <footer className={"modal-card-foot"} />
                </div>
            </div>,
            document.querySelector("#modals"),
        );
    }
    return null;
};

ModalInfo.propTypes = {
    showInfo: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
};

export default ModalInfo;

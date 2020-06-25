/* eslint-disable react/jsx-max-depth */
/* creation du model button pour l'app arbre
 * /src/components/modal/modal.js - creation du modal
 * code by sarahG4000 for becode formation
 * creation for montagne
 * creat 25/05/2020
 */
import React from "react";
import {createPortal} from "react-dom";
import PropTypes from "prop-types";
import {NBSP} from "../tools/constants";
//import SignupForm from "../tools/from";
// import {NBSP} from "../tools/constants";
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
    if (showInfo === true) {
        return createPortal(
            <div style={containerStyles}>
                <div className={"title modal-card"}>
                    <header className={"modal-card-head"}>
                        <p className={"modal-card-title"}>{"Profile"}</p>
                    </header>
                    <section className={"modal-card-body"}>
                        <div className={""}>
                            <p className={"title is-4 is-spaced"}>
                                {"Name : "}
                            </p>
                            <p className={"subtitle is-5"}>{"Bertho"}</p>
                            {NBSP}
                            <p className={"title is-4 is-spaced"}>
                                {" Money : "}
                            </p>
                            <p className={"subtitle is-5"}>{"8000 £"}</p>
                            {NBSP}
                            <p className={"title is-4 is-spaced"}>
                                {"Classement  : "}
                            </p>
                            <p className={"subtitle is-5"}>{" 2"}</p>
                            {NBSP}
                            <p className={"title is-4 is-spaced"}>
                                {"Historique des achats :"}
                            </p>
                            <p className={"subtitle is-5"}>
                                <ul>
                                    <li>{"monogos"}</li>
                                    <li>{"popos"}</li>
                                </ul>
                            </p>
                            {NBSP}
                            <p className={"subtitle is-5"}>
                                <a href={"#"}>{"Wikipedia"}</a>
                            </p>
                            {NBSP}

                            <p className={"title is-4 is-spaced"}>
                                {"Commentaires :"}
                            </p>
                            <p className={"subtitle is-5"}>
                                <ul>
                                    <li>{"comments"}</li>
                                    <li>{"comments"}</li>
                                </ul>
                            </p>
                        </div>
                    </section>
                    <footer className={"modal-card-foot"}>
                        <button
                            className={
                                "button is-success is-small is-pulled-right"
                            }
                            label={"Close"}
                            onClick={onHide}>
                            {"Close"}
                        </button>
                    </footer>
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

/* creation du model button pour l'app arbre
 * /src/components/modal/modal.js - creation du modal
 * code by sarahG4000 for becode formation
 * creation for montagne
 * creat 25/05/2020
 */
import React from "react";
import {createPortal} from "react-dom";
import PropTypes from "prop-types";
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
    zIndex: 1000,
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.5)",
};

const ModalInfo = ({showInfo = false, onHide}) => {
    if (showInfo === true) {
        return createPortal(
            <div style={containerStyles}>
                <div className={"box"}>
                    <button
                        className={"button is-success is-small is-pulled-right"}
                        label={"Close"}
                        onClick={onHide}>
                        {"X"}
                    </button>
                    <div>
                        <h3>{"Profil : Bertho"}</h3>

                        {" Money : 8000 £"}

                        {" Actuellement vous êtesnuméro : 2"}

                        {"Historique des achats"}
                        <ol>
                            <li>{"monogos"}</li>
                            <li>{"popos"}</li>
                        </ol>

                        <a href={"#"}>{"Wikipedia"}</a>

                        {"Commentaires"}
                        <ol>
                            <li>{"comments"}</li>
                            <li>{"comments"}</li>
                        </ol>

                        {"Warning"}

                        {"Info"}
                    </div>
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

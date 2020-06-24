/* creation du model button pour l'app arbre
 * /src/components/modal/modal.js - creation du modal
 * code by sarahG4000 for becode formation
 * creation for montagne
 * creat 25/05/2020
 */
import React from "react";
import {createPortal} from "react-dom";
import PropTypes from "prop-types";

// import axios from "axios";
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
    // const [state, setState] = useState(localStorage.getItem("tokenUserId"));
    // localStorage.getItem("tokenUserId");

    // useEffect(() => {
    //     if (state != undefined) {
    //         console.log(state);

    //         axios
    //             .get(`http://localhost/users/${state}`)
    //             .then(res => console.log(res.data))
    //             .catch(erreur => {
    //                 console.warn(erreur);
    //             });
    //     }
    // }, []);

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
                            <p className={"subtitle is-5"} />

                            <p className={"title is-4"}>{" Money : "}</p>
                            <p className={"subtitle is-5"}>{"8000 £"}</p>

                            <p className={"title is-4"}>{"Classement  : "}</p>
                            <p className={"subtitle is-5"}>{" 2"}</p>

                            <p className={"title is-4"}>
                                {"Historique des achats :"}
                            </p>
                            <div className={"subtitle is-5"}>
                                <ul>
                                    <li>{"monogos"}</li>
                                    <li>{"popos"}</li>
                                </ul>
                            </div>

                            <p className={"subtitle is-5"}>
                                <a href={"#"}>{"Wikipedia"}</a>
                            </p>

                            <p className={"title is-4"}>{"Commentaires :"}</p>
                            <div className={"subtitle is-5"}>
                                <ul>
                                    <li>{"comments"}</li>
                                    <li>{"comments"}</li>
                                </ul>
                            </div>
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

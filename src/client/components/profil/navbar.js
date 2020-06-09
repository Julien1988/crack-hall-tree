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

import * as React from "react";
import Userinfos from "./userinfo";
import Login from "./login";
import Logup from "./logup";
import "bootstrap/dist/css/bootstrap.css";
import Popup from "reactjs-popup";
import "./navbar.css";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfos: false,
        };
        /* this.onButtonClick = this.onButtonClick.bind(this); */
    }
    /*  onButtonClick() {
        this.setState({
            showInfos: true,
        }); 
    }*/
    render() {
        return (
            <div>
                <nav className={"navbar navbar-dark bg-dark navbar-expand-lg"}>
                    <div className={"collpase navbar-collapse"}>
                        <ul className={"navbar-nav mr-auto"}>
                            <li className={"navbar-item"}>
                                <div className={"nav-link"}>
                                    <Popup
                                        className={"popup"}
                                        trigger={<button> {"Profil"}</button>}
                                        position={"right center"}>
                                        <div>
                                            <Userinfos />
                                        </div>
                                    </Popup>
                                </div>
                            </li>
                            <li className={"navbar-item"}>
                                <div className={"nav-link"}>
                                    <Popup
                                        trigger={<button> {"Login"}</button>}
                                        position={"right center"}>
                                        <div>
                                            <Login />
                                        </div>
                                    </Popup>
                                </div>
                            </li>
                            <li className={"navbar-item"}>
                                <div className={"nav-link"}>
                                    <Popup
                                        trigger={<button> {"Logup"}</button>}
                                        position={"right center"}>
                                        <div>
                                            <Logup />
                                        </div>
                                    </Popup>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

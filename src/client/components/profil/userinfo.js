/* eslint-disable class-methods-use-this */
import * as React from "react";
import {ListGroup} from "react-bootstrap";

export default class Userinfos extends React.Component {
    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroup.Item variant={"dark"}>
                        <h3>{"Profil : Bertho"}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item variant={"dark"}>
                        {" Money : 8000 £"}
                    </ListGroup.Item>
                    <ListGroup.Item variant={"primary"}>
                        {" Actuellement vous êtesnuméro : 2"}
                    </ListGroup.Item>
                    <ListGroup.Item variant={"secondary"}>
                        {"Historique des achats"}
                        <ol>
                            <li>{"monogos"}</li>
                            <li>{"popos"}</li>
                        </ol>
                    </ListGroup.Item>

                    <ListGroup.Item variant={"success"}>
                        <a href={"#"}>{"Wikipedia"}</a>
                    </ListGroup.Item>
                    <ListGroup.Item variant={"danger"}>
                        {"Commentaires"}
                        <ol>
                            <li>{"comments"}</li>
                            <li>{"comments"}</li>
                        </ol>
                    </ListGroup.Item>

                    <ListGroup.Item variant={"warning"}>
                        {"Warning"}
                    </ListGroup.Item>
                    <ListGroup.Item variant={"info"}>{"Info"}</ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}

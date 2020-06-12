/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import * as React from "react";
import axios from "axios";
import {Form, Button} from "react-bootstrap";

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.onChangePseudo = this.onChangePseudo.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            pseudo: "",
            password: "",
        };
    }
    onChangePseudo(e) {
        this.setState({
            pseudo: e.target.value,
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            pseudo: this.state.pseudo,
            password: this.state.password,
        };

        // console.log(user);
        //let messsageError "";
        axios
            .post("http://localhost/users/authenticate", user)
            .then(res => console.log(res.data))
            .catch(erreur => {
                console.warn(`Error${erreur.response.data.message}`);
                //this.messsageError = erreur.response.data.message;
            });
        console.warn(user.pseudo);
        //recharge la page pour entrer un nouveau user
        /* this.setState({
            pseudo: "",
            color: "",
            email: "",
            password: "",
        }); */
        //sinon redirection profil à créer
        //window.location = "/";
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label>{"Pseudo"}</Form.Label>
                        <Form.Control
                            type={"text"}
                            placeholder={"Your Pseudo"}
                            value={this.state.pseudo}
                            onChange={this.onChangePseudo}
                        />
                    </Form.Group>

                    <Form.Group controlId={"formPlaintextPassword"}>
                        <Form.Label>{"Password"}</Form.Label>
                        <Form.Control
                            type={"password"}
                            placeholder={"Password"}
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </Form.Group>
                    <Button variant={"primary"} type={"submit"}>
                        {"Submit"}
                    </Button>
                </Form>
            </div>
        );
    }
}

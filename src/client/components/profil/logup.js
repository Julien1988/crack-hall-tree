/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import * as React from "react";
import axios from "axios";
import {Form, Button} from "react-bootstrap";

export default class Logup extends React.Component {
    constructor(props) {
        super(props);

        this.onChangePseudo = this.onChangePseudo.bind(this);
        this.onChangeColor = this.onChangeColor.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        //this.onChangeUserCreated = this.onChangeUserCreated.bind(this);
        //this.onChangeUserMessage = this.onChangeUserMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            pseudo: "",
            color: "",
            email: "",
            password: "",
            userCreated: "",
            message: "",
        };
    }
    onChangePseudo(e) {
        this.setState({
            pseudo: e.target.value,
        });
    }
    onChangeColor(e) {
        this.setState({
            color: e.target.value,
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
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
            color: this.state.color,
            email: this.state.email,
            password: this.state.password,
        };

        console.log(user);
        //let messsageError "";
        axios
            .post("http://localhost/users/register", user)
            .then(res => console.log(res.data))
            .catch(erreur => {
                console.warn(`Error${erreur.response.data.message}`);
            });
        //sinon redirection
        window.location = "/";
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
                        <Form.Text className={"text-muted"}>
                            {"We'll never share your email with anyone else."}
                        </Form.Text>
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
                    <Form.Group controlId={"exampleForm.ControlInput1"}>
                        <Form.Label>{"Email address"}</Form.Label>
                        <Form.Control
                            type={"email"}
                            placeholder={"name@example.com"}
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </Form.Group>
                    <Form.Group controlId={"exampleForm.ControlSelect1"}>
                        <Form.Label>{"Colors"}</Form.Label>
                        <Form.Control
                            as={"select"}
                            type={"text"}
                            placeholder={"Your color"}
                            value={this.state.color}
                            onChange={this.onChangeColor}>
                            <option>{"red"}</option>
                            <option>{"yellow"}</option>
                            <option>{"green"}</option>
                            <option>{"dark"}</option>
                            <option>{"grey"}</option>
                        </Form.Control>
                    </Form.Group>
                    {/* <Form.Group controlId={"formBasicCheckbox"}>
                        <Form.Check type={"checkbox"} label={"Check me out"} />
                    </Form.Group> */}
                    <Button variant={"success"} type={"submit"}>
                        {"Submit"}
                    </Button>
                </Form>
            </div>
        );
    }
}

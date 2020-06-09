/* eslint-disable class-methods-use-this */
import * as React from "react";
import {Form, Button} from "react-bootstrap";

export default class Logup extends React.Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId={"formBasicEmail"}>
                        <Form.Label>{"Email address"}</Form.Label>
                        <Form.Control
                            type={"email"}
                            placeholder={"Enter email"}
                        />
                        <Form.Text className={"text-muted"}>
                            {"We'll never share your email with anyone else."}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId={"formBasicPassword"}>
                        <Form.Label>{"Password"}</Form.Label>
                        <Form.Control
                            type={"password"}
                            placeholder={"Password"}
                        />
                    </Form.Group>
                    <Form.Group controlId={"exampleForm.ControlInput1"}>
                        <Form.Label>{"Email address"}</Form.Label>
                        <Form.Control
                            type={"email"}
                            placeholder={"name@example.com"}
                        />
                    </Form.Group>
                    <Form.Group controlId={"exampleForm.ControlSelect1"}>
                        <Form.Label>{"Example select"}</Form.Label>
                        <Form.Control as={"select"}>
                            <option>{"red"}</option>
                            <option>{"yellow"}</option>
                            <option>{"green"}</option>
                            <option>{"dark"}</option>
                            <option>{"grey"}</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId={"formBasicCheckbox"}>
                        <Form.Check type={"checkbox"} label={"Check me out"} />
                    </Form.Group>
                    <Button variant={"primary"} type={"submit"}>
                        {"Submit"}
                    </Button>
                </Form>
            </div>
        );
    }
}

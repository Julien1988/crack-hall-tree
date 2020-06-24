/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import React from "react";
// import axios from "axios";
import {useFormik} from "formik";

const Logup = () => {
    const formik = useFormik({
        initialValues: {
            pseudo: "",
            password: "",
            email: "",
            color: "",
        },
        onSubmit: values => {
            console.warn(JSON.stringify(values, null, 2));
        },
    });
    //sinon redirection
    // window.location = "/"

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={"field box"}>
                <p className={"control"}>
                    <label>{"Pseudo"}</label>
                    <input
                        className={"input"}
                        type={"name"}
                        name={"pseudo"}
                        id={"pseudo"}
                        placeholder={"Your Pseudo"}
                        value={formik.values.pseudo}
                        onChange={formik.handleChange}
                    />
                    <p className={"text-muted"}>
                        {"We'll never share your email with anyone else."}
                    </p>
                </p>
            </div>

            <div className={"field box"}>
                <p className={"control"}>
                    <label>{"Password"}</label>
                    <input
                        className={"input"}
                        type={"password"}
                        name={"password"}
                        id={"password"}
                        placeholder={"Password"}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                </p>
            </div>
            <div className={"field box"}>
                <p className={"control"}>
                    <label>{"Email address"}</label>
                    <input
                        className={"input"}
                        type={"email"}
                        name={"email"}
                        id={"email"}
                        placeholder={"name@example.com"}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                </p>
            </div>
            <div className={"field box"}>
                <p className={"control"}>
                    <label>{"Colors "}</label>
                    <p
                        className={"select"}
                        as={"select"}
                        type={"text"}
                        name={"colors"}
                        id={"colors"}
                        placeholder={"Your color"}
                        value={formik.values.color}
                        onChange={formik.handleChange}>
                        <select>
                            <option>{"color choice"}</option>
                            <option>{"red"}</option>
                            <option>{"yellow"}</option>
                            <option>{"green"}</option>
                            <option>{"dark"}</option>
                            <option>{"grey"}</option>
                            <option>{"brown"}</option>
                            <option>{"orange"}</option>
                            <option>{"pink"}</option>
                            <option>{"purple"}</option>
                            <option>{"white"}</option>
                        </select>
                    </p>
                </p>
            </div>
            <div className={"field box"}>
                <p className={"control"}>
                    <button
                        className={"button is-success"}
                        variant={"success"}
                        type={"submit"}>
                        {"Submit"}
                    </button>
                </p>
            </div>
        </form>
    );
};

export default Logup;

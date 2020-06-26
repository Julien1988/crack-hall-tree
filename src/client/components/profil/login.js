/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* creation du model button pour l'app arbre
 * /src/components/profil/login.js - model fromulaire de connection au jeux
 * code by sarahG4000 for becode formation
 * creation for montagne
 * creat 25/05/2020
 */
import React from "react";
import {useFormik} from "formik";
import axios from "axios";

const Login = () => {
    const formik = useFormik({
        initialValues: {
            password: "",
            pseudo: "",
        },
        onSubmit: values => {
            console.warn(JSON.stringify(values, null, 2));
        },
    });
    axios
        .post("http://localhost/users/authenticate", formik.values)
        .then(res => {
            localStorage.setItem("tokenUserId", JSON.stringify(res.data.id));
            console.log(res.data.id);
        })
        .catch(erreur => {
            console.warn(`Error${erreur.response.data.message}`);
            //this.messsageError = erreur.response.data.message;
        });
    console.warn(formik.values.pseudo);
    return (
        <form onSubmit={formik.handleSubmit} className={["block"].join(" ")}>
            <div className={"field"}>
                <p className={"control has-icons-left has-icons-right"}>
                    <label htmlFor={"pseudo"}>{"pseudo"}</label>
                    <input
                        className={"input"}
                        id={"pseudo"}
                        name={"pseudo"}
                        type={"text"}
                        onChange={formik.handleChange}
                        value={formik.values.pseudo}
                    />
                </p>
            </div>
            <div className={"field"}>
                <p className={"control has-icons-left has-icons-right"}>
                    <label htmlFor={"password"}>{"Password"}</label>
                    <input
                        className={"input"}
                        id={"password"}
                        name={"password"}
                        type={"password"}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </p>
            </div>
            <div className={"field"}>
                <p className={"control"}>
                    <button className={"button is-success"} type={"submit"}>
                        {"Submit"}
                    </button>
                </p>
            </div>
        </form>
    );
};

export default Login;

// import axios from "axios";

// export default class  extends React.Component {
//     constructor(props) {
//         super(props);

//         this.onChangePseudo = this.onChangePseudo.bind(this);
//         this.onChangePassword = this.onChangePassword.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             pseudo: "",
//             password: "",
//             onClose: true,
//         };
//     }
//     onChangePseudo(e) {
//         this.setState({
//             pseudo: e.target.value,
//         });
//     }
//     onChangePassword(e) {
//         this.setState({
//             password: e.target.value,
//         });
//     }

//     onSubmit(e) {
//         e.preventDefault();

//         const user = {
//             pseudo: this.state.pseudo,
//             password: this.state.password,
//         };
//         this.state.onClose = false;
//         console.log(this.state.onClose);

//         // console.log(user);
//         //let messsageError "";
//         axios
//             .post("http://localhost/users/authenticate", user)
//             .then(res => {
//                 localStorage.setItem(
//                     "tokenUserId",
//                     JSON.stringify(res.data.id),
//                 );
//                 console.log(res.data.id);
//             })
//             .catch(erreur => {
//                 console.warn(`Error${erreur.response.data.message}`);
//                 //this.messsageError = erreur.response.data.message;
//             });
//         console.warn(user.pseudo);
//         //recharge la page pour entrer un nouveau user
//         /* this.setState({
//             pseudo: "",
//             color: "",
//             email: "",
//             password: "",
//         }); */
//         //sinon redirection profil à créer
//         //window.location = "/";
//     }
//     render() {
//         return (
//             <form onSubmit={this.onSubmit} className={["block"].join(" ")}>
//                 <div className={"field box"}>
//                     <p className={"control has-icons-left has-icons-right"}>
//                         <label>{"Pseudo"}</label>
//                         <input
//                             className={"input"}
//                             type={"text"}
//                             placeholder={"Your Pseudo"}
//                             value={this.state.pseudo}
//                             onChange={this.onChangePseudo}
//                         />
//                     </p>
//                 </div>

//                 <div className={"field box"}>
//                     <p className={"control has-icons-left has-icons-right"}>
//                         <label>{"Password"}</label>
//                         <input
//                             className={"input"}
//                             type={"password"}
//                             placeholder={"Password"}
//                             value={this.state.password}
//                             onChange={this.onChangePassword}
//                         />
//                     </p>
//                 </div>
//                 <div className={"field box"}>
//                     <p className={"control"}>
//                         <button
//                             className={"button is-success"}
//                             variant={"primary"}
//                             type={"submit"}>
//                             {"Submit"}
//                         </button>
//                     </p>
//                 </div>
//             </form>
//         );
//     }
// }

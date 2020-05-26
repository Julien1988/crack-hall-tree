/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import express from "express";

import mongoose from "mongoose";

mongoose
    .connect(
        "mongodb+srv://mwenbwa12345:3mwIHp8j4UTSOM5J@mwenbwa-hde8o.mongodb.net/test?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    )
    .then(() => console.log("connexion réussie"))
    .catch(() => console.log("Connexion échouée"));

const {APP_PORT} = process.env;

const app = express();
//app.use(express.static(path.resolve(__dirname, "../../bin/client")));

// app.use("/test", (req, res, next) => {
//     const stuff = [
//         {
//             _id: "1",
//             psuedo: "toto",
//             email: "toto@gmail.com",
//         },
//     ];
//     res.status(200).json(stuff);

//     let test = "it's work";
//     res.send(console.log(test));
// });

app.get("/", (req, res) => {
    const test = "hello Test";
    res.send(test);
    console.log(test);
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

module.exports = app;

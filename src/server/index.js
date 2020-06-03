/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable prefer-arrow-callback */
require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("./_helpers/jwt");
const errorHandler = require("./_helpers/error-handler");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth t<o secure the api
app.use(jwt());

// api routes
app.use("/users", require("./users/users.controller"));

// global error handler
app.use(errorHandler);

// start server
const {APP_PORT} = process.env;
/* const port =
    process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000; */
/* const server = app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
}); */

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

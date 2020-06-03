/* eslint-disable global-require */
//const config = require("config.json");
const mongoose = require("mongoose");
const connectionOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};
//mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);//connexion locale required config.json
const uri =
    "mongodb+srv://dbUser:dYhU1vxb81ZX9yyT@bertholdmongodb-ztfz0.mongodb.net/crakehall?retryWrites=true&w=majority";
mongoose.connect(uri, connectionOptions);
mongoose.Promise = global.Promise;
//
module.exports = {
    User: require("../users/user.model"),
};

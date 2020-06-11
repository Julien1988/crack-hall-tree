const mongoose = require("mongoose");

const uri = "mongodb://mongo:27017/";
const options = {
    useNewUrlParser: true,
    dbName: "crack-hall-three",
    user: "dev",
    pass: "dev",
};
const DbConnection = () => {
    mongoose.connect(uri, options, function (error) {
        // Check error in initial connection. There is no 2nd param to the callback.
        console.log(" !!!! OK  !!!");
    });
    let getAllThrees = [];
    let db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function () {
        // we're connected!
        console.log("==> CONNECTE <==");
        let threeSchema = new mongoose.Schema({
            nom_complet: String,
            arbotag: Number,
            geoloc: {
                lat: Number,
                lon: Number,
            },
            hauteur_totale: Number,
            diametre_cime: Number,
            circonf: Number,
            player_id: Number,
            player_color: Number,
            leave: Number,
            random_name: String,
            locked: Boolean,
            free: Boolean,
            wikilink: String,
            comment: String,
        });

        let Three = mongoose.model("threes", threeSchema);

        Three.find(function (err, threes) {
            if (err) return console.error(err);

            getAllThrees = threes;
            //  -/\\- ADD THE FUNCTION YOU NEED HERE -/\\-
        });
    });
};
module.exports = DbConnection;

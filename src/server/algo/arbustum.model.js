const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    y_lambert72: {type: Number},
    arbotag: {type: Number},
    date_donnees: {type: Date},
    x_lambda: {type: Number},
    geoloc: {
        lat: {type: Number},
        lon: {type: Number},
    },
    hauteur_totale: {type: Number},
    x_lambert72: {type: Number},
    y_phi: {type: Number},
    nom_complet: {type: String},
    diametre_cime: {type: Number},
    circonf: {type: Number},
});

schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform(doc, ret) {
        delete ret._id;
        delete ret.hash;
    },
});

module.exports = mongoose.model("Arbustum", schema, "arbustum");

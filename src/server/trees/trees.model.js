const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const treeSchema = new Schema({
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

treeSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform(doc, ret) {
        delete ret._id;
        delete ret.hash;
    },
});

module.exports = mongoose.model("Trees", treeSchema, "threes");

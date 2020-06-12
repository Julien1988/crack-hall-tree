/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
const mongoDatabase = require("../_helpers/db");
const database = mongoDatabase.getDb();

module.exports = {
    users,
};
const users = () => {
    return new Promise((resolve, reject) => {
        database
            .collection("users")
            .find()
            .toArray((err, docs) => {
                if (err) {
                    // Reject the Promise with an error
                    return reject(err);
                }
                console.log(docs);
                // Resolve (or fulfill) the promise with data
                return resolve(docs);
            });
    });
};

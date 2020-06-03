/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
const expressJwt = require("express-jwt");
//const config = require("config");
const userService = require("../users/user.service");

module.exports = jwt;
const secret =
    "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING";
function jwt() {
    return expressJwt({secret, isRevoked}).unless({
        path: [
            // public routes that don"t require authentication
            "/users/authenticate",
            "/users/register",
        ],
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
}

/* eslint-disable no-confusing-arrow */
/* eslint-disable no-use-before-define */
const express = require("express");
const router = express.Router();
const algoService = require("./algo.service");

// routes
router.get("/three", algoService.getAll);
router.get("/3Threes", algoService.get3Threes);
router.get("/show", algoService.sheete);
//router.get("/:id", getById);
//router.put("/:id", update);
//router.delete("/:id", _delete);

module.exports = router;

/* function getAll(req, res, next) {
    algoService
        .getAll()
        .then(arbustum => res.json(arbustum))
        .catch(err => next(err));
} */

/* function getCurrent(req, res, next) {
    algoService
        .getById(req.arbustum.sub)
        .then(arbustum => (arbustum ? res.json(arbustum) : res.sendStatus(404)))
        .catch(err => next(err));
} */

/* function getById(req, res, next) {
    algoService
        .getById(req.params.id)
        .then(arbustum => (arbustum ? res.json(arbustum) : res.sendStatus(404)))
        .catch(err => next(err));
}
 */
/* function update(req, res, next) {
    algoService
        .update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    algoService
        .delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
 */

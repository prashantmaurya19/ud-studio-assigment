const e = require("express");
const { routeByDir } = require("../util/route");
const r = e.Router();

routeByDir(r, "api");

module.exports = r;

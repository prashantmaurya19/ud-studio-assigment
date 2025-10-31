const express = require("express");
const { routeByDir } = require("../../util/route");
const router = express.Router();

routeByDir(router, "api/auth");

module.exports = router;

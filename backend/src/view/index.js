const r = require("express").Router();

r.get("/", function (req, res) {
  res.sendFile("")
});

module.exports = r;

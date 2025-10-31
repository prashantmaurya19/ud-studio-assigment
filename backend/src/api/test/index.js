const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>testing route</h1>");
});

router.get("/hi/:uname", (req, res) => {
  res.send(`<h1>hellow ${req.params.uname}</h1>`);
});

module.exports = router;

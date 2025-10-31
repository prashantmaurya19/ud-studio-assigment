const passport = require("passport");
const express = require("express");
const r = express.Router();

r.get(
  "/callback",
  passport.authenticate("facebook", { failureRedirect: "/api/test/hi/fail" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/search");
  },
);

r.get("/", passport.authenticate("facebook"));

module.exports = r;

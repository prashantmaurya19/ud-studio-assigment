const passport = require("passport");
const express = require("express");
const r = express.Router();

r.get(
  "/callback",
  passport.authenticate("github", { failureRedirect: "/api/test/hi/fail" }),
  function (req, res) {
    console.log(res.user);
    // Successful authentication, redirect home.
    res.redirect("/search");
    },
);

r.get("/", passport.authenticate("github", { scope: ["user:email"] }));

module.exports = r;

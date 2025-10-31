const passport = require("passport");
const express = require("express");
const router = express.Router();

router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/api/test/hi/fail" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/search");
  },
);

router.get("/", passport.authenticate("google", { scope: ["profile"] }));

module.exports = router;

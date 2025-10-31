const passport = require("passport");
const { requireAllSubModule } = require("../util/route");

requireAllSubModule("oauth", () => {});

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

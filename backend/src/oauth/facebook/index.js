const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CID,
      clientSecret: process.env.FACEBOOK_CIS,
      callbackURL: "http://localhost:5000/api/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      cb(null, {
        id: profile.id,
        name: profile.displayName,
        picture: null,
        provider: profile.provider,
      });
    },
  ),
);

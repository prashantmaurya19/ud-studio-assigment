const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:5000/api/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      done(null, {
        id: profile.id,
        name: profile.displayName,
        picture: null,
        provider: profile.provider,
      });
    },
  ),
);

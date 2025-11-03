const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CID,
      clientSecret: process.env.GOOGLE_CIS,
      callbackURL: "http://localhost:5000/api/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      done(null, {
        id: profile.id,
        name: profile.displayName,
        picture: profile._raw.picture,
        provider: profile.provider,
      });
    },
  ),
);

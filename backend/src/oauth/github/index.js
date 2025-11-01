const passport = require("passport");

const GitHubStrategy = require("passport-github2").Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CID,
      clientSecret: process.env.GITHUB_CIS,
      callbackURL: `http://localhost:5000/api/auth/github/callback`,
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, {
        id: profile.id,
        name: profile.displayName,
        picture: profile.photos[0].value,
        provider: profile.provider,
      });
    },
  ),
);

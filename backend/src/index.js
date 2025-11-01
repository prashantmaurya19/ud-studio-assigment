const e = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const api_route = require("./api");
require("dotenv").config();

require("./oauth");
require("./db");

const app = e();
const port = process.env.PORT || 5000;
app.use(
  e.static(path.join(__dirname.substring(0, __dirname.length - 4), "public")),
);
app.use(
  session({
    secret: process.env.EXPRESS_SESSION_SECREAT,
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", api_route);
app.get(/^(?!.*api).*$/, function (req, res) {
  res.sendFile(
    path.join(
      __dirname.substring(0, __dirname.length - 4),
      "public",
      "index.html",
    ),
  );
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

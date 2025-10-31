const e = require("express");
const r = e.Router();

function isLoggedIn(req, res, next) {
  if (req.user == undefined) {
    res.sendStatus(401);
  } else {
    next();
  }
}

r.use(isLoggedIn);

r.get("/isloging", (req, res) => {
  res.send({ user: req.user });
});

r.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.sendStatus(200);
  });
});

module.exports = r;

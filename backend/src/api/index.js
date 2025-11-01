const e = require("express");
const { routeByDir } = require("../util/route");
const { TokenHistory, UserHistory } = require("../db/models");
const { searchPhotos } = require("../util/unsplash");
const r = e.Router();

routeByDir(r, "api");
r.get("/top-search", async (req, res) => {
  res.send(await UserHistory.find({}));
});
function isLoggedIn(req, res, next) {
  if (req.user == undefined) {
    res.sendStatus(401);
  } else {
    next();
  }
}
r.get("/search", isLoggedIn, async (req, res) => {
  const { query } = req.query;
  if (query == undefined) {
    res.sendStatus(400);
  } else {
    await UserHistory.findOneAndUpdate(
      { query },
      {
        $inc: { search_count: 1 },
        $addToSet: { user_ids: req.user.id },
      },
      {
        upsert: true,
        new: true,
        runValidators: true,
      },
    );
    res.send(await searchPhotos(query));
  }
});

r.get("/history", isLoggedIn, async (req, res) => {
  res.send(await UserHistory.find({ user_ids: { $in: [req.user.id] } }));
});

module.exports = r;

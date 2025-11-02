const e = require("express");
const { routeByDir } = require("../util/route");
const { UserHistory } = require("../db/models");
const { searchPhotosByParamerterObject } = require("../util/unsplash");
const r = e.Router();

routeByDir(r, "api");
r.get("/top-search", async (req, res) => {
  const n = parseInt(req.query.n);
  res.send(
    await UserHistory.find({})
      .sort({
        search_count: -1,
      })
      .limit(!isNaN(n) && n > 0 ? n : 5),
  );
});
function isLoggedIn(req, res, next) {
  if (req.user == undefined) {
    res.sendStatus(401);
  } else {
    next();
  }
}
r.get("/search", isLoggedIn, async (req, res) => {
  if (req.query.query == undefined) {
    res.sendStatus(400);
    return;
  }
  // console.log("search/", req.query.x_ud_search);
  if (req.query.x_ud_search == undefined) {
    const now = new Date();
    await UserHistory.findOneAndUpdate(
      { query: req.query.query },
      {
        $inc: { search_count: 1 },
        $addToSet: { user_ids: req.user.id },
        $push: { createdOn: now },
      },
      {
        upsert: true,
        new: true,
        runValidators: true,
      },
    );
  }
  res.send(await searchPhotosByParamerterObject(req.query));
});

r.get("/history", isLoggedIn, async (req, res) => {
  res.send(await UserHistory.find({ user_ids: { $in: [req.user.id] } }));
});

module.exports = r;

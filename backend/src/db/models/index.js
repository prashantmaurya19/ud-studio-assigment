const mongoose = require("mongoose");
const { UserHistorySchema } = require("../schema");

const UserHistory = mongoose.model("history", UserHistorySchema);

module.exports = {
  UserHistory,
};

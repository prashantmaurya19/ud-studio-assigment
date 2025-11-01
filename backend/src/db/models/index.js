const mongoose = require("mongoose");
const { UserHistorySchema, TokenHistorySchema } = require("../schema");

const UserHistory = mongoose.model("history", UserHistorySchema);
const TokenHistory = mongoose.model("token_history", TokenHistorySchema);

module.exports = {
  UserHistory,
  TokenHistory,
};

const mongoose = require("mongoose");

const UserHistorySchema = new mongoose.Schema({
  user_ids: [String],
  query: {
    type: String,
    require: true,
  },
  search_count: { type: Number, default: 0 },
  createdOn: { type: Date, default: Date.now },
});

const TokenHistorySchema = new mongoose.Schema({
  token: {
    type: String,
    unique: true,
  },
  occure: {
    type: Number,
    default: 0,
  },
});

module.exports = {
  UserHistorySchema,
  TokenHistorySchema,
};

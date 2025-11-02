const mongoose = require("mongoose");

const UserHistorySchema = new mongoose.Schema({
  user_ids: [String],
  query: {
    type: String,
    require: true,
  },
  search_count: { type: Number, default: 0 },
  createdOn: { type: [Date] },
});

module.exports = {
  UserHistorySchema,
};

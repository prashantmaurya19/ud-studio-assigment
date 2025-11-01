const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    process.env.MONGODB_CONNECT_URL
      ? process.env.MONGODB_CONNECT_URL
      : "mongodb://127.0.0.1:27017/test",
  );

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

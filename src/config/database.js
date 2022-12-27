const mongoose = require("mongoose");
const { MONGO_URI } = require("./secrets");

mongoose.set("strictQuery", false);

const connectMongoDB = () => {
  try {
    mongoose.connect(MONGO_URI);
    console.log("\n ⏰ Waiting MongoDB Connections 😴 😴");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("\n\n\n\n\n\n\n\n\n❌❌❌❌❌❌❌❌❌❌❌❌");
  console.log(" 😔 MongoDB Disconnected ❌");
  console.log("❌❌❌❌❌❌❌❌❌❌❌❌");
});

mongoose.connection.on("connected", () => {
  console.log();
  console.log("🎉 🎇 🎆 MongoDB connected successfully🥳 🎆 🎇 🎉");
});

module.exports = connectMongoDB;

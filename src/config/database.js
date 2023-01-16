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
  console.log("\n %cMongoDB Disconnected!", "color:red;font-size:xx-large;font-weight:bold;")
});

mongoose.connection.on("connected", () => {
  console.log("\n %c🎉 🎇 🎆 MongoDB connected successfully🥳 🎆 🎇 🎉", "color:green;font-size:xx-large;font-weight:bold;\n")
});

module.exports = connectMongoDB;

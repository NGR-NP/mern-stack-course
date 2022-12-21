const { PORT, API_URL } = require("../src/config/secrets");
const connectMongoDB = require("../src/config/database");

// module.exports = {
//   SERVERSTARTING: console.log("\nstarting node server\n"),
//   EXPRESSCLG: console.log(
//     "🚀🚀 express app is Running 🏃 at 🌐 " +
//       API_URL +
//       " & 👂 listening on PORT " +
//       PORT +
//       " "
//   ),
//   LOCALCLG: console.log("\n Local: " + API_URL + ":" + PORT),
//   MONGOOSE: connectMongoDB(),
// };

const consoleMessage = () => {
  const startingNode = console.log("\nstarting node server\n");

  const expressRunning = console.log(
    "🚀🚀 express app is Running 🏃 at 🌐 " +
      API_URL +
      " & 👂 listening on PORT " +
      PORT +
      " "
  );

  const LocalUrl = console.log("\n Local: " + API_URL + ":" + PORT);

  //// mongoose
  const mongooseMessage = connectMongoDB();
};
module.exports = consoleMessage;

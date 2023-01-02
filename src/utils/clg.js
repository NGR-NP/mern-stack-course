const { PORT, API_URL } = require("../config/secrets");

const startingNode = console.log("\nstarting node server\n");

const expressRunning = console.log(
  "🚀🚀 express app is Running 🏃 at 🌐 " +
    API_URL +
    " & 👂 listening on PORT " +
    PORT +
    " "
);

const LocalUrl = console.log("\n Local: " + API_URL + ":" + PORT);

module.exports = { startingNode, expressRunning, LocalUrl, };

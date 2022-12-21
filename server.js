const app = require("./src/config/Express");
const { PORT } = require("./src/config/secrets");

// comment this before pushing
// const consoleMessage = require("./src/clg");
// app.listen(PORT || 8000, () => {
//   consoleMessage();
// });
//

app.listen(PORT || 8000)

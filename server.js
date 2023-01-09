const connectMongoDB = require("./src/config/database");
const app = require("./src/config/Express");
const { PORT } = require("./src/config/secrets");

// /* reminder only for devlopment
//require("./src/utils/clg");
//  */ //reminder only for devlopment

app.listen(PORT, () => {
  connectMongoDB();
});

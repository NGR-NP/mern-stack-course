const app = require("./src/config/Express");
const { PORT } = require("./src/config/secrets");

/* reminder uncomment this line on production this is only use on development
require("./src/utils/clg");
 */ //reminder uncomment this line on production this is only use on development

app.listen(PORT);

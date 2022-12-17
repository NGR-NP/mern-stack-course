const app = require("./src/config/Express");
const PORT = 8000;
const API_URL = "https://localhost:";

app.listen(PORT || 8080, () => {
  console.log("express Running at " + API_URL + PORT + " 👂");
});

const { ALLOWED_DOMAIN } = require("../config/secrets");
const whitelist = [
  ALLOWED_DOMAIN,
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];
module.exports = whitelist;

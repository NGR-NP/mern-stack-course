const { ALLOWED_DOMAIN,ALLOWED_DOMAIN_DEV } = require("../config/secrets");
const whitelist = [
  ALLOWED_DOMAIN,
  ALLOWED_DOMAIN_DEV,
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];
module.exports = whitelist;

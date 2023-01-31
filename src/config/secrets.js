require("dotenv").config({});
module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT || 8000,
  API_URL: process.env.API_URL,
  JWT: process.env.JWT,
  REFRESH_JWT: process.env.REFRESH_JWT,
  HASH_SALT: process.env.HASH_SALT,
  EXPIREIN: process.env.EXPIREIN,
  ALLOWED_DOMAIN: process.env.ALLOWED_DOMAIN,
  ALLOWED_DOMAIN_DEV: process.env.ALLOWED_DOMAIN_DEV,
};

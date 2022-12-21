require("dotenv").config({});
module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT || 8000,
  API_URL: process.env.API_URL,
  JWT: process.env.JWT,
  EXPIREIN: process.env.EXPIREIN,
};

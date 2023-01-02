const bcrypt = require("bcryptjs");
const saltNum = bcrypt.genSaltSync(5);
module.exports = saltNum;

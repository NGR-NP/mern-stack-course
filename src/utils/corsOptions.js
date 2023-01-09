const ERROR = require("./error");
const whitelist = require("./whitelist");
const corsOptions = {
  origin: (origin, callback) => {
    if (
      whitelist.indexOf(origin) !== -1 
      // /* reminder comment origin on production
//      || !origin
      // */ //reminder
    ) {
      callback(null, true);
    } else {
      callback(ERROR(401, "not allowed by Cors"));
    }
  },
};
module.exports = corsOptions;

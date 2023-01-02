// Dynamic Origin
// const whitelist = [
//   "https://vrit-tech-mernstack-project-by-roll-1.netlify.app",
//   "http://localhost:8080",
// ];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("not allowed by Cors"));
//     }
//   },
// };
// module.exports = corsOptions;

const { ALLOWED_DOMAIN } = require("../config/secrets");
const { ERROR } = require("./error");
const whitelist = [ALLOWED_DOMAIN];
const corsOptions = {
  origin: (origin, callback) => {
    if (
      whitelist.indexOf(origin) !== -1 ||
      // /* reminder uncomment this line `|| !origin` on production this is only use on development
      //  or `||` may be moved to top while fromat
      !origin
      // */ //reminder uncomment this line
    ) {
      callback(null, true);
    } else {
      callback(ERROR(401, "not allowed by Cors"));
    }
  },
};
module.exports = corsOptions;

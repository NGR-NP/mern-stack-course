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

// const { ALLOWED_DOMAIN } = require("../config/secrets");
const ERROR = require("./error");
const whitelist = [
  "https://vrit-tech-mernstack-project-by-roll-1.netlify.app",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (
      whitelist.indexOf(origin) !== -1
      // /* reminder comment origin on production
      || !origin
      // */ //reminder
    ) {
      callback(null, true);
    } else {
      callback(ERROR(401, "not allowed by Cors"));
    }
  },
};
module.exports = corsOptions;

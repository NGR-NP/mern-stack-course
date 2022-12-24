// // Dynamic Origin
// const whitelist = [
//   "https://vrit-tech-mernstack-project-by-roll-1.netlify.app",
//   "http://localhost:8080",
// ];
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("domain is block by cors"));
//     }
//   },
//   optionSuccessStatus: 200,
// };
// module.exports = corsOptions;

const { ALLOWED_DOMAIN } = require("../config/secrets");

const whitelist = [
  ALLOWED_DOMAIN,
  /* reminder uncomment this line on production this is only use on development
  // "https://www.google.com", "http://localhost:8080",
  */ //reminder uncomment this line on production this is only use on development
];
const corsOptions = {
  origin: (origin, callback) => {
    if (
      whitelist.indexOf(origin) !== -1 
      /* reminder uncomment this line `|| !origin` on production this is only use on development
      //  or `||` may be moved to top while fromat  
      || !origin
      */ //reminder uncomment this line
    ) {
      callback(null, true);
    } else {
      callback(Error("not allowed by Cors"));
    }
  },
};
module.exports = corsOptions;

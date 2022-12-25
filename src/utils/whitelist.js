// Dynamic Origin
const whitelist = [
  "https://vrit-tech-mernstack-project-by-roll-1.netlify.app",
  "http://localhost:8080",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("not allowed by Cors"));
    }
  },
};
module.exports = corsOptions;


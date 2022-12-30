const jwt = require("jsonwebtoken");
const { JWT } = require("../config/secrets");

const verifytoken = (req, res, next) => {
  const token = req.Auth.Bearer.token;
  // const token = authHeader.split(" ")[1];
  if (!token) {
    const err = new Error();
    err.status = 401;
    err.message = "you are not authenticated";
    return next(err);
  }
  jwt.verify(token, JWT, (err, user) => {
    if (err) {
      const err = new Error();
      err.status = 403;
      err.message = "token is not valid";
      return next(err);
    }
    req.users = user;
    next();
  });
};
const verifyUser = (req, res, next) => {
  verifytoken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      const err = new Error();
      err.status = 403;
      err.message = "your are not allowed to do that";
      return next(err);
    }
  });
};
const verifyAdmin = (req, res, next) => {
  verifytoken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      const err = new Error();
      err.status = 403;
      err.message = "your are not allowed to do that on Admin can do that";
      return next(err);
    }
  });
};
module.exports = { verifytoken, verifyUser, verifyAdmin };

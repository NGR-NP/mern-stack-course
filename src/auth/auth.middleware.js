const jwt = require("jsonwebtoken");
const { JWT } = require("../config/secrets");
const ERROR = require("../utils/error");

const verifyJwt = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer "))
    return next(ERROR(401, "you are not authenticated!"));
  const token = authHeader.split(" ")[1];
  jwt.verify(token, JWT, (err, decoded) => {
    if (err) return next(ERROR(403, "invalid token"));
    req.id = decoded.id;
    req.username = decoded.username;
    req.role = decoded.role;
    next();
  });
};
const verifyCurrentUser = (req, res, next) => {
  verifyJwt(req, res, () => {
    if (req.id === req.params.id) {
      next();
    } else {
      return next(ERROR(403, "you are not authorized!"));
    }
  });
};
const verifyRole = (...isAllowed) => {
  return (req, res, next) => {
    if (!req?.role) return next(ERROR(401, "you are not authorize no role"));
    const roleArray = [...isAllowed];
    console.log(req.role);
    console.log(roleArray);
    const result = req.role
      .map((role) => roleArray.includes(role))
      .find((val) => val === true);
    if (!result)
      return next(ERROR(401, "unauthorized! only permited user can do that"));
    next();
  };
};
module.exports = { verifyJwt, verifyRole, verifyCurrentUser };

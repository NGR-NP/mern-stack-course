const User = require("../models/User");
const ERROR = require("../utils/error");

const me = async (req, res, next) => {
  const { id } = req;
  if (!id) {
    return next(ERROR(401, "id not provided jwt"));
  }

  if (id === req.params.id) {
    const foundUser = await User.findOne({ _id: id });
    if (!foundUser) {
      return next(ERROR, (403, "you are not "));
    }
    if (foundUser) {
const {password, refreshTokenDB, ...otherDetals} = foundUser._doc;
      res.status(200).json({ ...otherDetals });
    }
  }
};
module.exports = me;

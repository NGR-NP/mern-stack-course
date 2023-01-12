const routenotavailable = (_, res) => {
  res.status(404).json({
    message: "Current path is not available ⛔",
  });
};
module.exports = routenotavailable;

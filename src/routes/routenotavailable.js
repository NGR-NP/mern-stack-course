const routenotavailable = (_, res) => {
  res.status(404).json({
    error: "Current path is not available ⛔",
  });
};
module.exports = routenotavailable;

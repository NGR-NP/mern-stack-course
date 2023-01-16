const routenotavailable = (_, res) => {
  res.status(404).json({
    message: "Current path is not available ⛔",
  });
  console.log("\n %c404 route not found!", "color:red;font-size:xx-large;font-weight:bold;")
  
};
module.exports = routenotavailable;

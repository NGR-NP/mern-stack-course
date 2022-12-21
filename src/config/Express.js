const express = require("express");
const Routes = require("../../src/routes/routes");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: ["https://vrit-tech-mernstack-project-by-roll-1.netlify.app"],
  })
);

app.use(express.json());
app.use(express.json());

//api route
app.use("/api", Routes);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong ❔";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.use("*", (_, res) => {
  res.status(404).json({
    error: "Current path is not available ⛔",
  });
});

module.exports = app;

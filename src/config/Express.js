const express = require("express");

const app = express();
app.use= (cors())
app.use(express.json());
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
app.use("*", (_, res)=>{
    res.status(404).json({
        error: "This Route doesn't exist  ⛔"
    })
})

module.exports = app;

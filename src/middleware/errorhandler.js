const errorHandler = (err, _req, res, _next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went worng!";
  return res.status(errorStatus).json({
    success: false,
    errorStatus: errorStatus,
    errorMessage: errorMessage,
    stack: err.stack,
  });
};
module.exports = errorHandler;

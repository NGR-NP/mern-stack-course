const errorHandler = (err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went worng!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
};
module.exports = errorHandler;

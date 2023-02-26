// const errorHandler = (err, req, res, next) => {
//   const errorStatus = err.status || 500;
//   const errorMessage = err.message || "something went worng!";
//   return res.status(errorStatus).json({
//     success: false,
//     status: errorStatus,
//     message: errorMessage,
//     stack: err.stack,
//   });
// };
// module.exports = errorHandler;
const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const errorMessage = err.message || 'Something went wrong!';
  const stack = err.stack;

  res.status(status).json({
    success: false,
    status,
    message: errorMessage,
    stack
  });
};

module.exports = errorHandler;

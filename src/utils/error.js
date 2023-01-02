// module.exports = (status, message) => {
//   const err = new Error();
//   err.status = status;
//   err.message = message;
//   return err;
// };

const ERROR = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};
module.exports = ERROR;

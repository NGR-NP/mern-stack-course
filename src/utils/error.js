// module.export = createError{
//   const err = new Error();
//   err.status = status;
//   err.message = message;
//   return err();
// }

const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  return err();
};
module.export = createError;

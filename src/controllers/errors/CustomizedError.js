const CustomizedError = (message, status) => {
  const myError = new Error(message);
  myError.status = status;
  return myError;
};

module.exports = CustomizedError;

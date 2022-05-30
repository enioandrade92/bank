module.exports = (message, name) => {
  const err = new Error(message);
  err.name = name;
  throw err;
};

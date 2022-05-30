module.exports = (err, _req, res, next) => {
  const { name, message } = err;

  switch (name) {
    case 'unauthorized':
      console.log(err);
      res.status(401).json({ message });
      break;
    case 'bad_request':
      console.log(err);
      res.status(400).json({ message });
      break;

    default:
      console.log(err);
      res.status(500).json({ message });
      break;
  }

  next();
};

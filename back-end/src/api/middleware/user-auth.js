const jwt = require('../../app/utils/jwt');

module.exports = (req, res, next) => {
  try {
    const payload = jwt.verifyToken(req.headers.authorization);
    req.user = payload;
    next();
  } catch (error) {
    const err = new Error('Token invalid or expired');
    err.name = 'unauthorized';
    throw err;
  }
};

const jwt = require('../../app/utils/jwt');
const errorUtil = require('../../app/utils/error-util');

module.exports = (req, _res, next) => {
  try {
    const payload = jwt.verifyToken(req.headers.authorization);
    req.user = payload;
    next();
  } catch (error) {
    errorUtil('Token invalid or expired', 'unauthorized');
  }
};

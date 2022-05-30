const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');

const JWT_SECRET = readFileSync('./src/jwt.evalution.key', 'utf-8');

module.exports = {
  generateToken(payload) {
    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '5h',
      algorithm: 'HS256',
    });

    return token || null;
  },

  verifyToken(token) {
    return jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });
  },
};

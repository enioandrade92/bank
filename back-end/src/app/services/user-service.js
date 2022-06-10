const bcryptjs = require('bcryptjs');
const jwt = require('../utils/jwt');
const userModel = require('../models/user-model');
const errorUtil = require('../utils/error-util');

module.exports = {
  async signIn(login) {
    const user = await userModel.findByEmail(login.email);
    if (!user) errorUtil('Not found user', 'unauthorized');

    if (!bcryptjs.compareSync(login.password, user.password)) {
      errorUtil('Incorret password', 'unauthorized');
    }

    delete user.createAt;
    delete user.updateAt;
    const token = jwt.generateToken(user);

    return { token };
  },

  async signUp(user) {
    const foundUser = await userModel.findByEmail(user.email);
    if (foundUser) errorUtil('User exists', 'bad_request');

    const createdUser = await userModel.create(user);
    delete createdUser.createAt;
    delete createdUser.updateAt;
    const token = jwt.generateToken(createdUser);

    return { token };
  },

  async findById(id) {
    const user = await userModel.findById(id);

    return user;
  },
};

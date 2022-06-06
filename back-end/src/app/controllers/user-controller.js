const userService = require('../services/user-service');
const dataValidator = require('../validators/data-validator');

module.exports = {
  async signIn(req, res) {
    await dataValidator.signIn(req.body);
    const login = await userService.singIn(req.body);
    res.status(201).json(login);
  },
  async signUp(req, res) {
    await dataValidator.signUp(req.body);
    const createdUser = await userService.singUp(req.body);
    res.status(201).json(createdUser);
  },
};

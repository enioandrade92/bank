const userService = require('../services/user-service');
const dataValidator = require('../validators/data-validator');

module.exports = {
  async singIn(req, res) {
    await dataValidator.singIn(req.body);
    const login = await userService.singIn(req.body);
    res.status(201).json(login);
  },
  async singUp(req, res) {
    await dataValidator.singIn(req.body);
    const createdUser = await userService.singUp(req.body);
    res.status(201).json(createdUser);
  },
};

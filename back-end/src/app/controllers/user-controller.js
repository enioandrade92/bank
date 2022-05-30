const userService = require('../services/user-service');

module.exports = {
  async singIn(req, res) {
    const login = await userService.singIn(req.body);
    res.status(201).json(login);
  },
  async singUp(req, res) {
    const createdUser = await userService.singUp(req.body);
    res.status(201).json(createdUser);
  },
};

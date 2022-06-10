const userService = require('../services/user-service');
const dataValidator = require('../validators/data-validator');

module.exports = {
  async signIn(req, res) {
    await dataValidator.signIn(req.body);
    const login = await userService.signIn(req.body);
    res.status(201).json(login);
  },
  async signUp(req, res) {
    await dataValidator.signUp(req.body);
    const createdUser = await userService.signUp(req.body);
    res.status(201).json(createdUser);
  },

  async me(req, res) {
    const { user } = req;
    const updatedDataUser = await userService.findById(user.id);
    delete updatedDataUser.createAt;
    delete updatedDataUser.password;

    return res.status(200).json(updatedDataUser);
  },
};

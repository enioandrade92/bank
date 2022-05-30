const { Router } = require('express');
const userController = require('../../app/controllers/user-controller');

const singinRouter = Router();

singinRouter.post('/', userController.singIn);

module.exports = singinRouter;

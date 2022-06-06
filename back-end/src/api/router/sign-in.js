const { Router } = require('express');
const userController = require('../../app/controllers/user-controller');

const signinRouter = Router();

signinRouter.post('/', userController.signIn);

module.exports = signinRouter;

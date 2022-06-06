const { Router } = require('express');
const user = require('../../app/controllers/user-controller');

const signupRouter = Router();

signupRouter.post('/', user.signUp);

module.exports = signupRouter;

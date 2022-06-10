const { Router } = require('express');

const userController = require('../../app/controllers/user-controller');
const userAuth = require('../middleware/user-auth');

const userRouter = Router();

userRouter.post('/signin', userController.signIn);
userRouter.post('/signup', userController.signUp);
userRouter.get('/me', userAuth, userController.me);

module.exports = userRouter;

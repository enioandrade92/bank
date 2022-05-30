const { Router } = require('express');
const user = require('../../app/controllers/user-controller');

const singupRouter = Router();

singupRouter.post('/', user.singUp);

module.exports = singupRouter;

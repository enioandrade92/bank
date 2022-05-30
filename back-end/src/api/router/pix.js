const { Router } = require('express');
const userAuth = require('../middleware/user-auth');
const pixController = require('../../app/controllers/pix-controller');

const pixRouter = Router();

pixRouter.use(userAuth);
pixRouter.post('/request', pixController.request);
pixRouter.post('/pay/:key', pixController.pay);
pixRouter.get('/transactions', pixController.transactions);

module.exports = pixRouter;

require('express-async-errors');
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/error-handler');
const signinRouter = require('./router/sign-in');
const signupRouter = require('./router/sign-up');
const pixRouter = require('./router/pix');

const api = express();

api.use(express.json());
api.use(cors());

api.use('/singin', signinRouter);
api.use('/singup', signupRouter);
api.use('/pix', pixRouter);

api.use(errorHandler);

module.exports = api;

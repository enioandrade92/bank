require('express-async-errors');
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/error-handler');
const userRouter = require('./router/user');
const pixRouter = require('./router/pix');

const api = express();

api.use(express.json());
api.use(cors());

api.use('/user', userRouter);
api.use('/pix', pixRouter);

api.use(errorHandler);

module.exports = api;

require('express-async-errors');
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/error-handler');
const singinRouter = require('./router/sing-in');
const singupRouter = require('./router/sing-up');
const pixRouter = require('./router/pix');

const api = express();

api.use(express.json());
api.use(cors());

api.use('/singin', singinRouter);
api.use('/singup', singupRouter);
api.use('/pix', pixRouter);

api.use(errorHandler);

module.exports = api;

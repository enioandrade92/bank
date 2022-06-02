const pixService = require('../services/pix-service');
const dataValidator = require('../validators/data-validator');

module.exports = {
  async request(req, res) {
    await dataValidator.pixValue(req.body);
    const requestkey = await pixService.request(req.user, req.body.value);
    return res.status(201).json({ requestkey });
  },

  async pay(req, res) {
    const payment = await pixService.pay(req.user, req.params.key);
    return res.status(201).json(payment);
  },

  async transactions(req, res) {
    const dataTransactions = await pixService.transactions(req.user);
    return res.status(201).json(dataTransactions);
  },
};

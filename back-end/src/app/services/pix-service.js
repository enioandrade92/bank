const userModel = require('../models/user-model');
const pixModel = require('../models/pix-model');
const pixUtil = require('../utils/pix-util');
const errorUtil = require('../utils/error-util');

module.exports = {
  async request(user, value) {
    const currentUser = await userModel.findByEmail(user.email);
    const requestData = {
      requestingUser: currentUser.id,
      value,
      status: 'open',
    };
    const register = await pixModel.create(requestData);

    const key = pixUtil.encodeKey(currentUser.id || '', value, register.id);

    return key;
  },

  async pay(user, key) {
    const keyDecoded = pixUtil.decodeKey(key);
    if (keyDecoded.id === user.id) {
      errorUtil('Its not doing transactions for yourself', 'bad_request');
    }

    const requestingUser = await userModel.findById(keyDecoded.id);
    const payingUser = await userModel.findById(user.id);

    if (!requestingUser || !payingUser) {
      errorUtil('Customers not found, generate a new key', 'bad_request');
    }

    if (payingUser.wallet < +keyDecoded.value) {
      errorUtil('Insufficient funds', 'bad_request');
    }

    requestingUser.wallet += keyDecoded.value;
    payingUser.wallet -= keyDecoded.value;

    await userModel.updateWallet(requestingUser.id, requestingUser.wallet);
    await userModel.updateWallet(payingUser.id, payingUser.wallet);

    const pixTransaction = await pixModel.findById(keyDecoded.registerId);

    if (!pixTransaction) errorUtil('Invalid key', 'bad_request');

    pixTransaction.status = 'close';
    pixTransaction.payingUser = payingUser.id;

    await pixModel.update(pixTransaction.id, pixTransaction);

    return { message: 'Successful payment' };
  },

  async transactions(user) {
    const dataTransactions = await pixModel.findManyId(user.id);

    return dataTransactions;
  },

};

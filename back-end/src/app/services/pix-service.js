const userModel = require('../models/user-model');
const pixModel = require('../models/pix-model');
const pixUtil = require('../utils/pix-util');
const errorUtil = require('../utils/error-util');

async function checkPixStatus(pixId) {
  const pixTransaction = await pixModel.findById(pixId);

  if (!pixTransaction) errorUtil('Invalid key', 'bad_request');

  if (pixTransaction.status === 'close') {
    errorUtil('This pix key is paid', 'bad_request');
  }

  return pixTransaction;
}

async function checkCustomers(requestingId, payingId) {
  const requestingUser = await userModel.findById(requestingId);
  const payingUser = await userModel.findById(payingId);
  if (!requestingUser || !payingUser) {
    errorUtil('Customers not found, generate a new key', 'bad_request');
  }

  return { requestingUser, payingUser };
}

module.exports = {
  async request(user, value) {
    const currentUser = await userModel.findByEmail(user.email);
    const requestData = {
      requestingUser: currentUser.id,
      value,
      status: 'open',
    };
    const requestPix = await pixModel.create(requestData);

    const key = pixUtil.encodeKey(currentUser.id || '', value, requestPix.id);

    return key;
  },

  async pay(user, key) {
    const keyDecoded = pixUtil.decodeKey(key);
    if (keyDecoded.userId === user.id) {
      errorUtil('Its not doing transactions for yourself', 'bad_request');
    }

    const pixTransaction = await checkPixStatus(keyDecoded.pixId);

    const { requestingUser, payingUser } = await checkCustomers(keyDecoded.userId, user.id);

    if (payingUser.wallet < +keyDecoded.value) {
      errorUtil('Insufficient funds', 'bad_request');
    }

    requestingUser.wallet += keyDecoded.value;
    payingUser.wallet -= keyDecoded.value;

    await userModel.updateWallet(requestingUser.id, requestingUser.wallet);
    await userModel.updateWallet(payingUser.id, payingUser.wallet);

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

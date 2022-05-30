const bcryptjs = require('bcryptjs');
const prismaClient = require('../../database/prisma-client');

module.exports = {
  async findByEmail(email) {
    const user = await prismaClient.user.findUnique({
      where: { email },
    });

    return user || null;
  },

  async findById(id) {
    const user = await prismaClient.user.findUnique({
      where: { id },
    });

    return user || null;
  },

  async updateWallet(id, wallet) {
    const updatedUser = await prismaClient.user.update({
      where: { id },
      data: { wallet },
    });

    return updatedUser;
  },

  async create(user) {
    const createdUser = await prismaClient.user.create({
      data: {
        ...user,
        password: bcryptjs.hashSync(user.password),
        accountNumber: Math.floor(Math.random() * 999999),
        accountDigit: Math.floor(Math.random() * 99),
      },
    });

    return createdUser;
  },
};

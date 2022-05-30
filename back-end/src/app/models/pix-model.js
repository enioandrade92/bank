const prismaClient = require('../../database/prisma-client');

module.exports = {
  async create(dataPix) {
    const createdPix = await prismaClient.pix.create({
      data: dataPix,
    });

    return createdPix;
  },

  async update(id, data) {
    const { status, payingUser } = data;
    const updatedUser = await prismaClient.pix.update({
      where: { id },
      data: { status, payingUser },
    });

    return updatedUser;
  },

  async findById(id) {
    const pix = await prismaClient.user.findUnique({
      where: { id },
    });

    return pix || null;
  },

  async findManyId(id) {
    const requesting = await prismaClient.pix.findMany({
      orderBy: { updateAt: 'desc' },
      where: { requestingUser: id, status: 'close' },
    });

    const paying = await prismaClient.pix.findMany({
      orderBy: { updateAt: 'desc' },
      where: { payingUser: id, status: 'close' },
    });
    return { requesting, paying };
  },
};

const { PrismaClient } = require('@prisma/client');

const userSeed = require('./seedData/user');

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding ...');
  await prisma.user.createMany({ data: userSeed });
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

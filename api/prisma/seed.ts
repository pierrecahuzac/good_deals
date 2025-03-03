import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();

async function main() {
  const password: string = faker.internet.password();
  console.log(password);
  const passwordHashed: string = bcrypt.hashSync(password, 10);
  console.log(passwordHashed);

  const user = await prisma.user.create({
    data: {
      email: faker.internet.email(),
      name: faker.person.lastName(),
      role: 'USER',
      //@ts-ignore
      password: passwordHashed,
    },
  });
  console.log(user);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

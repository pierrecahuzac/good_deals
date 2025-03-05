import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

console.log('Bcrypt:', bcrypt);
console.log('Bcrypt hashSync:', bcrypt.hashSync);

async function main() {
  const password: string = faker.internet.password();
 
 
  const passwordHashed: string = await bcrypt.hash(password, 10);
let i = 0
while (i < 50) {
  
 const user =  await prisma.user.create({
    data: {
      email: faker.internet.email(),
      username: faker.person.lastName(),
      role: 'USER',
      //@ts-ignore
      password: passwordHashed,
    },
  });
  console.log(user);
  i++
}
 /// 
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

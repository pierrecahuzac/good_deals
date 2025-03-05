import { Injectable } from '@nestjs/common';
import { SignupDTO } from 'src/auth/dto/signup.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';
import { UserDTO } from 'src/auth/dto/user.dto';
const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async create(SignupDTO: SignupDTO): Promise<UserDTO> {
    return await prisma.user.create({
      data: {
        email: SignupDTO.email,
        password: SignupDTO.password,
        username: SignupDTO.username,
      },
    });
  }
  async findByEmail(email: string): Promise<{
    id: string;
    email: string;
    username: string | null;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
  } | null> {
    const user: UserDTO = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    console.log(user);

    if (!user) {
      return null;
    }
    return user;
  }
  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    return await prisma.user.delete({
      where: {
        id,
      },
    });
  }
}

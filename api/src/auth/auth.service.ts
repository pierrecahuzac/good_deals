import { BadRequestException, Injectable } from '@nestjs/common';
import { SigninDTO } from './dto/signin.dto';
import * as bcrypt from 'bcryptjs';
import { SignupDTO } from './dto/signup.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async signIn(SigninDTO: SigninDTO) {
    try {
      const user = await this.userService.findByEmail(SigninDTO.email);
      console.log(user);

      if (user) {
        const comparePassword = await bcrypt.compare(
          SigninDTO.password,
          user.password,
        );
        if (comparePassword === true) {
          delete user.password;
          return user;
        }
        const payload: { id: string; username: string; email: string } = {
          id: user.id,
          username: user.username,
          email: user.email,
        };

        return {
          message: 'Wrong combinaison email/password',
          access_token: await this.jwtService.signAsync(payload),
        };
      }
    } catch (err) {
      console.log(err);
    }
  }
  async signUp(SignupDTO: SignupDTO) {
    if (!SignupDTO.email || !SignupDTO.password || !SignupDTO.username) {
      throw new BadRequestException(
        'Email, password and username are required',
      );
    }
    const user = await this.userService.create(SignupDTO);
    return { user, message: 'User created' };
  }
  async remove(userId) {
    if (!userId) {
      throw new BadRequestException("ID's user is required");
    }
    return this.userService.remove(userId);

    // v { message: 'User deleted' };
  }
}

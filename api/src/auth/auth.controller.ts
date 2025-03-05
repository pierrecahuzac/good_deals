import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
import { SigninDTO } from './dto/signin.dto';
import { SignupDTO } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')

  async signIn(
    @Body() SigninDTO: SigninDTO,
    @Res({ passthrough: true }) res: Response,
  ): Promise<object> {
    try {
      const { email, password } = SigninDTO;
      if (!email || !password) {
        throw new BadRequestException('Email and password are required');
      }
      const user = await this.authService.signIn(SigninDTO);
      if (!user ) {
      throw new BadRequestException('Invalid credentials');
    }
      console.log(user);

      // @ts-ignore
      return res.status(HttpStatus.OK).json({ user });
    } catch (error) {
      console.error(error);
      throw new BadRequestException('An error occurred during sign-in');
    }
  }

  @Post('signup')
  async signup(@Body() SignupDTO: SignupDTO): Promise<any> {
    if (
      !SignupDTO.email ||
      !SignupDTO.password ||
      (!SignupDTO.confirmPassword && !SignupDTO.username)
    ) {
      throw new BadRequestException(
        'Informations (email, password, username) are required',
      );
    }
    if (SignupDTO.password !== SignupDTO.confirmPassword) {
      throw new BadRequestException('Passwords must be identicals');
    }
    const user = await this.authService.signUp(SignupDTO);
    console.log(user);
    return;
  }
  // @Post()
  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.create(createAuthDto);
  // }

  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(id);
  }
}

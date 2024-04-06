import { UserService } from './../user/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userService.findByEmail(loginDto.email);

    if (user) {
      if (await bcrypt.compare(loginDto.password, user.password)) {
        const payload = { email: user.email, sub: user.id };
        return { accessToken: await this.jwtService.signAsync(payload) };
      } else {
        throw new UnauthorizedException('E-mail ou senha inválidos.');
      }
    }

    throw new UnauthorizedException('E-mail ou senha inválidos.');
  }
}

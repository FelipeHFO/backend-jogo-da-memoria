import { User } from '@modules/users/user.type';
import { UsersService } from '@modules/users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dtos/auth-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async signIn(authLoginDto: AuthLoginDto) {
    const user: User = await this.userService.findOne({
      select: ['id', 'username', 'email', 'password'],
      where: {
        email: authLoginDto.email,
      },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    if (authLoginDto.password !== user.password) {
      throw new UnauthorizedException();
    }

    return this.jwtService.sign({
      id: user.id,
      username: user.username,
      email: user.email,
    });
  }
}

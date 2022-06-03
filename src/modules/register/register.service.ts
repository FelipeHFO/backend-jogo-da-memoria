import { AuthService } from '@modules/auth/auth.service';
import { UsersService } from '@modules/users/users.service';
import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class RegisterService {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  async register(registerDto: RegisterDto) {
    const data = await this.usersService.save(registerDto);

    if (!data) {
      return { msg: 'Erro durante o cadastro do usuário' };
    }

    const token = await this.authService.signIn({
      email: data.email,
      password: data.password,
    });

    return { token: token };
  }
}

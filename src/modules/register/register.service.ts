import { UsersService } from '@modules/users/users.service';
import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class RegisterService {
  constructor(private readonly usersService: UsersService) {}

  async register(registerDto: RegisterDto) {
    const data = await this.usersService.save(registerDto);
    return data;
  }
}

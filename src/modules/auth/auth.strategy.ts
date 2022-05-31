import { ApiConfigService } from '@modules/api-config/api-config.service';
import { UsersService } from '@modules/users/users.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { UsersEntity } from '@modules/users/entities/users.entity';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UsersService,
    { authConfig: { jwtSecretKey } }: ApiConfigService,
  ) {
    super({
      secretOrKey: jwtSecretKey,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  public async validate(payload): Promise<UsersEntity> {
    return await this.userService.findOne(payload.id);
  }
}

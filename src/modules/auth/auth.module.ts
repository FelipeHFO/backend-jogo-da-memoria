import { ApiConfigService } from '@modules/api-config/api-config.service';
import { UsersModule } from '@modules/users/users.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthStrategy } from './auth.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule.registerAsync({
      inject: [ApiConfigService],
      useFactory: ({ authConfig: { defaultStrategy } }: ApiConfigService) => ({
        defaultStrategy,
      }),
    }),
    JwtModule.registerAsync({
      inject: [ApiConfigService],
      useFactory: ({ authConfig }: ApiConfigService) => ({
        secret: authConfig.jwtSecretKey,
        signOptions: { expiresIn: authConfig.jwtExpiresIn },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthStrategy],
})
export class AuthModule {}

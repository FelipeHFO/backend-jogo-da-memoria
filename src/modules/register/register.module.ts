import { AuthModule } from '@modules/auth/auth.module';
import { UsersModule } from '@modules/users/users.module';
import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
  providers: [RegisterService],
  controllers: [RegisterController],
  imports: [UsersModule, AuthModule],
})
export class RegisterModule {}

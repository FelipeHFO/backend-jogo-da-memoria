import { UsersModule } from '@modules/users/users.module';
import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
  imports: [UsersModule],
  providers: [RegisterService],
  controllers: [RegisterController],
})
export class RegisterModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiConfigModule } from './api-config/api-config.module';
import { ApiConfigService } from './api-config/api-config.service';
import { AuthModule } from './auth/auth.module';
import { RegisterModule } from './register/register.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    RegisterModule,
    ApiConfigModule,
    TypeOrmModule.forRootAsync({
      inject: [ApiConfigService],
      useFactory: ({ databaseConfig }: ApiConfigService) => databaseConfig,
    }),
  ],
})
export class AppModule {}

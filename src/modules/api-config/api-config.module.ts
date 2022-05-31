import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiConfigService } from './api-config.service';
import { validationSchema } from './api-config.validation';

@Global()
@Module({
  imports: [ConfigModule.forRoot({ validationSchema })],
  exports: [ApiConfigService],
  providers: [ApiConfigService],
})
export class ApiConfigModule {}

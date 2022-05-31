import { NestFactory } from '@nestjs/core';
import { ApiConfigService } from './modules/api-config/api-config.service';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const apiConfigService = app.get(ApiConfigService);
  await app.listen(apiConfigService.apiConfig.port);
}
bootstrap();

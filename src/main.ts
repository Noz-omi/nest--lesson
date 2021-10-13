import { NotFoundException } from '@nestjs/common/exceptions';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SystemErrorFilter } from './system-error-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new SystemErrorFilter());
  await app.listen(3000);
}
bootstrap();

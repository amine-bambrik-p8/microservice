/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { IAppConfigService } from './app';
async function setupApi(app: INestApplication) {
  const appConfig = app.get(IAppConfigService);
  const globalPrefix = appConfig.getApiPrefix();
  const port = appConfig.getApiPort();
  app.setGlobalPrefix(globalPrefix);
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await setupApi(app);
}

bootstrap();

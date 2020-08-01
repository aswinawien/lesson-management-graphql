import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as config from "config";

import { AppModule } from './app.module';

const portConfig = config.get("server")

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(portConfig.port);
}
bootstrap();

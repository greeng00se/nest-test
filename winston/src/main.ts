import { NestFactory } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { AppModule } from './app.module';
import { winstonLoggerConfig } from './config/WinstonLoggerConfig';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(
      winstonLoggerConfig
    )
  });
  await app.listen(3000);
}
bootstrap();

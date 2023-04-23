import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ColoredConsoleLogger } from './colored-console.logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ColoredConsoleLogger(),
  });
  await app.listen(3000);
}
bootstrap();

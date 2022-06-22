import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
  if (process.env.NODE_ENV === 'test') {
    setTimeout(() => {
      app.close();
    }, 5000);
  }
}

bootstrap();

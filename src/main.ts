import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation using class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips properties that shouldn't be there
      forbidNonWhitelisted: true, // throws error if extra props are sent
      transform: true, // transforms payloads to DTO instances
    }),
  );

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('CRM API')
    .setDescription('Simple CRUD API for Customers')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(`🚀 Server running on http://localhost:3000`);
  console.log(`📚 Swagger docs available at http://localhost:3000/api`);
}
bootstrap();

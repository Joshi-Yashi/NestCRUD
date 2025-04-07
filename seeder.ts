import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { CrmService } from './crm/crm.service';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const crmService = app.get(CrmService);

  await crmService.create({
    name: 'Seeded User',
    email: 'seeded@example.com',
  });

  console.log('Sample customer seeded successfully');
  await app.close();
}

bootstrap();

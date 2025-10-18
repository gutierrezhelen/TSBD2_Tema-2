import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Carpeta para archivos estáticos (CSS, JS)
  app.useStaticAssets(join(__dirname, '..', 'public'));
  
  // Carpeta para vistas hbs
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
  console.log('🚀 Servidor corriendo en http://localhost:3000');
}
bootstrap();

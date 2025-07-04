import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('ecommerce backend')
    .setDescription('Authentication and LMS endpoints')
    .setVersion('1.0')
    .addBearerAuth() // Enables "Authorize" button for JWT tokens
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Accessible at /api
  await app.listen(7005);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';

type SwaggerCustomOpts = {
  path?: string;
  title: string;
  description?: string;
};

const addSwaggerToNestApp = (
  app: INestApplication,
  opts?: SwaggerCustomOpts,
) => {
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => {
      return (
        methodKey.replace('index', 'get') +
        controllerKey.replace('Controller', '')
      );
    },
  };
  const path = opts?.path || '/api';
  const title = opts?.title || 'App';
  const description = opts?.description || 'App';

  const config = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion('3.0')
    .build();
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup(path, app, document);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  addSwaggerToNestApp(app, {
    title: 'ExerciseBook',
    description: 'Api for exercise book app',
  });
  app.useGlobalPipes(new ValidationPipe());
  if (process.env.NODE_ENV !== 'production') {
    app.getHttpAdapter().getInstance().set('json spaces', 2);
  }
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: false,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(process.env.PORT || 3001);
}
bootstrap();

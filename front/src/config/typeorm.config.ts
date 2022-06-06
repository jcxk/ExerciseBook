import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const OrmSqliteConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'db',
  entities: [__dirname + '/../modules/**/*.entity{.ts,.js}'],
  synchronize: true,
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  //migrationsRun: true,
  logging: true,
};

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return OrmSqliteConfig;
  },
};

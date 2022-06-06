import { OrmSqliteConfig } from './typeorm.config';
import { DataSource, DataSourceOptions } from 'typeorm';
export default new DataSource(OrmSqliteConfig as DataSourceOptions);

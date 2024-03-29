import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { AppConfig, AppStorage } from '../../modules';
import * as fs from 'fs';
const os = require('os');
const directoryPath = os.tmpdir();
const dbFilePath = 'saves/save.save';
if (!fs.existsSync(dbFilePath)) {
  fs.mkdirSync(directoryPath, { recursive: true });
  fs.writeFileSync(dbFilePath, '');
}
const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'saves/save.save',
  entities: [__dirname + '/../../**/*.entity.{js,ts}'],
  synchronize: true,
  logging: true,
});
export default AppDataSource;

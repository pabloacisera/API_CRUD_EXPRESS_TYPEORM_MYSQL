import { DataSource, DataSourceOptions, Migration } from "typeorm";
import Profesional from '../MODEL/profesional.model';
import { Cliente } from '../MODEL/client.model';
import { Resultado } from '../MODEL/results.model';
import { Nomenclatura } from '../MODEL/nomen.model';
import { join } from "path";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";


const configDbConnection: DataSourceOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "kayascodelario24",
  database: "centro_medico",
  entities: [Profesional, Cliente, Resultado, Nomenclatura],
  logging: true,
  migrationsRun: false,
  synchronize: false,
  migrations: [join(__dirname, "../**/*.migration(.ts, .js)")],
  namingStrategy: new SnakeNamingStrategy(),
}

export const AppDataSource: DataSource = new DataSource(configDbConnection)



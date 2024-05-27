import { DataSource } from "typeorm";
import Profesional from '../MODEL/profesional.model';
import { Cliente } from '../MODEL/client.model';
import { Resultado } from '../MODEL/results.model';
import { Nomenclatura } from '../MODEL/nomen.model';

export const appDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "kayascodelario24",
  database: "centro_medico",
  entities: [Profesional, Cliente, Resultado, Nomenclatura],
  logging: true,
  synchronize: true,
});

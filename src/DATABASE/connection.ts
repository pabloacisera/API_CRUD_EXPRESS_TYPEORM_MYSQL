import { DataSource } from "typeorm";

export const appDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "kayascodelario24",
  database: "centro_medico",
  entities: [],
  logging: true,
  /*synchronize: true,*/
});


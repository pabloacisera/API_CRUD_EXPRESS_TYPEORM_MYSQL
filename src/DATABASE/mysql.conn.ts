import { DataSource } from "typeorm";
import { AppDataSource } from "./connection";
import { logger } from "../UTILIES/logger";

export const mySqlConn = async():Promise<DataSource>=>{
  try {
    logger.info('=======port:3306=========')
    logger.info('===Database: centro_medico===')
    return await AppDataSource.initialize();
  } catch (error) {
    console.log(error);
    throw new Error('Error to connect to Database')
  }
}
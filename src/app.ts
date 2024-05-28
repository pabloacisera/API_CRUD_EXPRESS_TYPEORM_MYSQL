import express from 'express';
import { Routes } from './INTERFACE/route.interface';
import { API_VERSION, LOG_FORMAT, NODE_ENV, PORT } from './CONFIG/config';
import { logger, stream } from './UTILIES/logger'; 
import displayRoutes from 'express-routemap';
import morgan from 'morgan';
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
import cookieParser from 'cookie-parser'; // Corrected typo
import { corsConfig } from './CONFIG/corsConfig';

class App {
  public app: express.Application;
  public env: string;
  public port: number;
  public server: any;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || "development";
    this.port = Number(PORT) || 5000;

    this.initMiddlewares();
    this.initializeRoutes(routes);
    this.connectToDb();
    this.initSwagger();
    this.initErrorHandling();
  }

  private initSwagger() {
    // Implement Swagger initialization or leave a comment
    // Not implemented yet
  }

  private initErrorHandling() {
    // Implement error handling or leave a comment
    // Not implemented yet
  }

  public getServer() {
    return this.app;
  }

  public closeServer(done?: any) {
    if (this.server) {
      this.server.close(done);
    }
  }

  private initMiddlewares() {
    this.app.use(morgan(LOG_FORMAT || 'combined', { stream })); // Ensure LOG_FORMAT has a default value
    this.app.use(cors(corsConfig));
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(cookieParser());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private connectToDb() {
    // Implement database connection or leave a comment
    // Not implemented yet
  }

  public initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use(`/api/${API_VERSION}`, route.router);
    });
  }

  public listen() {
    this.server = this.app.listen(this.port, () => {
      displayRoutes(this.app);
      logger.info('========================================');
      logger.info(`========== ENV: ${this.env} ============`);
      logger.info(`=== App listen on port: ${this.port} ===`);
      logger.info('========================================');
    });
  }
}

export default App;

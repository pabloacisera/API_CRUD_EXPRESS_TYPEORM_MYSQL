import express from 'express';
import { Routes } from './INTERFACE/route.interface';
import { NODE_ENV, PORT } from './CONFIG/config';

class App {
  public app: express.Application;
  public env: string;
  public port: number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || "development";
    this.port = Number(PORT) || 5000;
  }

  /**
   * listen
   */
  public listen() {
    
  }

}

export default App;

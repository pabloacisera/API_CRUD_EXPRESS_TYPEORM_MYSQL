import App from './app';
import { appDataSource } from "./DATABASE/connection";
import BaseRoute from './ROUTES/base.Routes';
import { PORT } from './CONFIG/config'

const app = new App([new BaseRoute()]);

async function main() {
  try {
    await appDataSource.initialize();
    console.log("Data Source has been initialized!");

    app.listen()
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error during Data Source initialization:", err.message);
    }
  } 
}

main();

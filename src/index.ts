import App from './app';
import { appDataSource } from "./DATABASE/connection";
import BaseRoute from './ROUTES/base.Routes';
import { PORT } from './CONFIG/config'
import { userRoutes } from './ROUTES/user.Routes';

const app = new App([new BaseRoute(), new userRoutes()]);

async function main() {
  try {
    app.listen()
    await appDataSource.initialize();
    console.log("Data Source has been initialized!");
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error during Data Source initialization:", err.message);
    }
  } 
}

main();

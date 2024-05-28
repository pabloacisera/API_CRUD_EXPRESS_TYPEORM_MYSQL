import App from './app';
import { AppDataSource } from "./DATABASE/connection";
import BaseRoute from './ROUTES/base.Routes';
import { PORT } from './CONFIG/config';
import { userRoutes } from './ROUTES/user.Routes';

const app = new App([new BaseRoute(), new userRoutes()]);

async function main() {
  try {
    await AppDataSource.initialize(); // Asegúrate de inicializar la fuente de datos
    app.listen();
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error during Data Source initialization:", err.message);
    }
  }
}

main();

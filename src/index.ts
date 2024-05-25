import app from "./app";
import { appDataSource } from "./DATABASE/connection";

async function main() {
  try {
    app.listen(process.env.PORT || 6500, () => {
      console.log(">>>Servidor escuchando en puerto: ", process.env.PORT);
    });

    await appDataSource
      .initialize()
      .then(() => {
        console.log("Data Source has been initialized!");
      })
      .catch((err) => {
        console.error("Error during Data Source initialization:", err);
      });
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
}

main();

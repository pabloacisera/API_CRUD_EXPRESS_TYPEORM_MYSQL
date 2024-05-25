import { Request, Response } from "express";

class DoctorsController {
  constructor() {}

  registrar(req: Request, res: Response) {

    const { area, nombre, email, password } = req.body;

    try {
      res.send('registrando...')
    } catch (error) {
      if(error instanceof Error){
        res.send(500).send(error.message)
      }
    }
  }

  logear(req: Request, res: Response) {

    const { email, password } = req.body;

    try {
      res.send('logeando...')
    } catch (error) {
      if(error instanceof Error){
        res.send(500).send(error.message)
      }
    }
  }
}

export default new DoctorsController;

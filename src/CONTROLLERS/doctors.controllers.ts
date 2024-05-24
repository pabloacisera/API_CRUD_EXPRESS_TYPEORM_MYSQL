import { Request, Response } from "express";

class DoctorsController {
  constructor() {}

  static registrar(req: Request, res: Response) {
    res.send('registrando...');
  }

  static logear(req: Request, res: Response) {
    res.send('logeando...');
  }
}

export default DoctorsController;

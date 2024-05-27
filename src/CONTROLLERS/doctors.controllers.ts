import { Request, Response } from "express";

class DoctorsController {
  constructor() {}

  /**
   * registrar
   */
  public registrar(req: Request, res: Response): void {
    // Aquí puedes implementar la lógica para registrar un médico
    res.status(200).json({ message: 'Registrando médico...' });
  }
}

export default DoctorsController;

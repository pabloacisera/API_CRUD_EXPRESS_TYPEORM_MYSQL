import { Request, Response } from "express";
import UserServices from "../SERVICES/userServices";

class DoctorsController {

  constructor(private readonly userServices: UserServices = new UserServices()) {}

  /**
   * registrar
   */
  public register = async (req: Request, res: Response) => {
    try {
      const userBody = req.body;  
      const serviceResp = await this.userServices.createProfile(userBody);
      res.status(201).json({ message: "Registro exitoso", user: serviceResp });
    } catch (error) {
      res.status(500).json({ message: "Error al registrar el perfil", error});
    }
  };

  /**
   * profile
   */
  public profile = async (req: Request, res: Response) => {
    try {
      const { id: userId } = req.params;
      const serviceResp = await this.userServices.userProfile(parseInt(userId, 10));  // Convertir userId a número
      res.status(200).json({ message: "Perfil del usuario", user: serviceResp });
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el perfil", error });
    }
  };

  /**
   * updateProfile
   */
  public updateProfile = async (req: Request, res: Response) => {
    try {
      const { id: userId } = req.params;
      const updateUserBody = req.body;  
      const serviceResp = await this.userServices.updateProfile(parseInt(userId, 10), updateUserBody);  // Convertir userId a número
      res.status(200).json({
        message: "Perfil del usuario modificado",
        user: serviceResp,
      });
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar el perfil", error });
    }
  };

  /**
   * deleteProfile
   */
  public deleteProfile = async (req: Request, res: Response) => {
    try {
      const { id: userId } = req.params;
      const serviceResp = await this.userServices.deleteProfile(parseInt(userId, 10));  // Convertir userId a número
      res.status(200).json({
        message: "Perfil del usuario eliminado",
        user: serviceResp,
      });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar el perfil", error });
    }
  };
}

export default DoctorsController;

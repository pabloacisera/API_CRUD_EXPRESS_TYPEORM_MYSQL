import { Request, Response } from "express";
import UserServices from "../SERVICES/userServices";

class DoctorsController {
  private readonly userServices: UserServices = new UserServices();

  constructor() {}

  /**
   * registrar
   */
  public register = async (req: Request, res: Response) => {
    try {
      const userBody = req;
      const serviceResp = await this.userServices.createProfile(userBody);
      res.status(201).json({ message: "Registro exitoso", user: serviceResp });
    } catch (error) {
      res.status(500).json({ message: "Error al registrar el perfil", error });
    }
  };

  /**
   * profile
   */
  public profile = async (req: Request, res: Response) => {
    try {
      const { id: userId } = req.params;
      const serviceResp = await this.userServices.userProfile(userId);
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
      const {body: updateUserBody} = req.body;
      const serviceResp = await this.userServices.updateProfile(userId, updateUserBody);
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
      const serviceResp = await this.userServices.deleteProfile(userId);
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

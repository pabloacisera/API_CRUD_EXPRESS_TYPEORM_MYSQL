import { Request, Response } from 'express';
import UserServices from '../SERVICES/userServices';
import { HttpResponse } from '../RESPONSE/http.response';

class DoctorsController {
  constructor(
    private readonly userServices: UserServices = new UserServices(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}

  /**
   * registrar
   */
  public register = async (req: Request, res: Response) => {
    try {
      const userBody = req.body;
      const serviceResp = await this.userServices.createProfile(userBody);
      return this.httpResponse.OK(res, serviceResp);
    } catch (error) {
      return this.httpResponse.Error(
        res,
        'No se ha podido registrar el usuario'
      );
    }
  };

  /**
   * profile
   */
  public profile = async (req: Request, res: Response) => {
    try {
      const { id: userId } = req.params;
      const serviceResp = await this.userServices.userProfile(parseInt(userId, 10));

      if (!serviceResp) return this.httpResponse.notFound(res, "No se ha encontrado al usuario");

      return this.httpResponse.OK(res, serviceResp);
    } catch (error) {
      return this.httpResponse.Error(res, 'No se ha encontrado al usuario');
    }
  };

  /**
   * updateProfile
   */
  public updateProfile = async (req: Request, res: Response) => {
    try {
      const { id: userId } = req.params;
      const updateUserBody = req.body;
      const serviceResp = await this.userServices.updateProfile(parseInt(userId, 10), updateUserBody);

      return this.httpResponse.OK(res, {
        message: 'Perfil del usuario modificado',
        user: serviceResp,
      });
    } catch (error) {
      return this.httpResponse.Error(res, 'Error al actualizar el perfil');
    }
  };

  /**
   * deleteProfile
   */
  public deleteProfile = async (req: Request, res: Response) => {
    try {
      const { id: userId } = req.params;
      const serviceResp = await this.userServices.deleteProfile(parseInt(userId, 10));

      return this.httpResponse.OK(res, {
        message: 'Perfil del usuario eliminado',
        user: serviceResp,
      });
    } catch (error) {
      return this.httpResponse.Error(res, 'Error al eliminar el perfil');
    }
  };
}

export default DoctorsController;

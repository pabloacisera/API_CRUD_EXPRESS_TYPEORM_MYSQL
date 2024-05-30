import { BaseServices } from '../CONFIG/baseServices';
import Profesional from '../MODEL/profesional.model';

class UserServices extends BaseServices<Profesional> {
  constructor() {
    super(Profesional);
  }

  /**
   * userProfile
   */
  public async userProfile(id: number) {
    try {
      const repository = await this.repository;
      const user = await repository.findOne({ where: { id } });

      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      return {
        id,
        profile: 'profile info: ',
        user,
      };
    } catch (error) {
      throw new Error('Error al obtener el perfil del usuario');
    }
  }

  /**
   * async createProfile
   */
  public async createProfile(userBody: any) {
    try {
      const repository = await this.repository;

      const newUser = repository.create(userBody);

      const userCreated = await repository.save(newUser);

      return {
        profile: 'Datos guardados: ',
        userCreated,
      };
    } catch (error) {
      throw new Error('Error al crear el perfil del usuario');
    }
  }

  /**
   * async updateProfile
   */
  public async updateProfile(id: number, updateUserBody: any) {
    try {
      const repository = await this.repository;

      const user = await repository.findOne({ where: { id } });
      if (!user) {
        throw new Error('No se ha encontrado Id valida');
      }

      await repository.update(id, updateUserBody);

      const updatedUser = await repository.findOne({ where: { id } });

      return {
        id,
        profile: 'Perfil modificado: ',
        updatedUser,
      };
    } catch (error) {
      throw new Error('Error al actualizar el perfil del usuario');
    }
  }

  /**
   * async deleteProfile
   */
  public async deleteProfile(id: number) {
    try {
      const repository = await this.repository;

      const user = await repository.findOne({ where: { id } });

      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      await repository.remove(user);

      return {
        profile: 'Usuario borrado exitosamente',
      };
    } catch (error) {
      throw new Error('Error al eliminar el perfil del usuario');
    }
  }
}

export default UserServices;

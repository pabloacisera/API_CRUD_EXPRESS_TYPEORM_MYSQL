import { DeleteResult } from 'typeorm';
import { BaseServices } from '../CONFIG/baseServices';
import { ProfesionalDto } from '../DTO/user.dto';
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
  public async createProfile(userBody: ProfesionalDto) {
    try {
      const repository = await this.repository;
  
      const newUser = repository.create(userBody);
  
      const userCreated = await repository.save(newUser);
  
      return userCreated;
    } catch (error) {
      console.error('Error al crear el perfil del usuario:', error);
      return null;
    }
  }
  

  /**
   * async updateProfile
   */
  public async updateProfile(id: number, updateUserBody: ProfesionalDto) {
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
  public async deleteProfile(id: number): Promise<DeleteResult | null> {
    try {
      const repository = await this.repository;
  
      const user = await repository.findOne({ where: { id } });
  
      if (!user) {
        return null;
      }
  
      const deleteResult = await repository.delete(id);
      return deleteResult;
    } catch (error) {
      console.error("Error al eliminar el perfil del usuario: ",  error); 
      return null;
    }
  }
  
}

export default UserServices;

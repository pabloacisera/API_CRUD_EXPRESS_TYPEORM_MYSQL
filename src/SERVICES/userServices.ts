import { DeleteResult } from 'typeorm';
import { BaseServices } from '../CONFIG/baseServices';
import { ProfesionalDto } from '../DTO/user.dto';
import Profesional from '../MODEL/profesional.model';
import { createHash } from '../UTILIES/hash';

class UserServices extends BaseServices<Profesional> {
  constructor() {
    super(Profesional);
  }

  /**
   * userProfile
   */
  public async userProfile(id: number) {
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
  }

  /**
   * async createProfile
   */
  public async createProfile(userBody: ProfesionalDto): Promise<ProfesionalDto | null> {
    const repository = await this.repository;

    const { password, ...restUserBody } = userBody;

    const hashedPass = await createHash(password);

    const newUser = repository.create({
      ...restUserBody,
      password: hashedPass,
    });

    const userCreated = await repository.save(newUser);

    const userProfile: ProfesionalDto = {
      id: userCreated.id,
      name: userCreated.name,
      email: userCreated.email,
      password: userCreated.password,  
      createdAt: userCreated.createdAt,
    };

    return userProfile;
  }

  /**
   * async updateProfile
   */
  public async updateProfile(id: number, updateUserBody: ProfesionalDto) {
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
  }

  /**
   * async deleteProfile
   */
  public async deleteProfile(id: number): Promise<DeleteResult | null> {
    const repository = await this.repository;

    const user = await repository.findOne({ where: { id } });

    if (!user) {
      return null;
    }

    const deleteResult = await repository.delete(id);
    return deleteResult;
  }
}

export default UserServices;

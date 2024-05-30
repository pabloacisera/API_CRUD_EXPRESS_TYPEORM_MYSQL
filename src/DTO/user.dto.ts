import { IsDate, IsNotEmpty, IsOptional } from 'class-validator'

export class ProfesionalDto {

  @IsOptional()
  id!: number;

  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  email!: string;
 
  @IsNotEmpty()
  password!: string;

  @IsNotEmpty()
  area!: string;

  @IsOptional()
  @IsDate()
  createdAt!: Date;

}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Nomenclatura {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  codigo!: string;

  @Column()
  determinacion!: string;

  @Column()
  ub!: string; // Asumiendo que U.B es una abreviatura y usamos `ub` para el nombre de la columna
}

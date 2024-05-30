import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import  Profesional  from './profesional.model';

@Entity()
export class Cliente {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  apellido!: string;

  @Column()
  dni!: string;

  @Column()
  edad!: number;

  @Column()
  telefono!: string;

  @Column()
  email!: string;

  @Column()
  direccion!: string;

  @Column()
  obrasocial!: string;

  @Column()
  observaciones!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @ManyToOne(() => Profesional, (profesional: Profesional) => profesional.clientes)
  profesional!: Profesional;

}

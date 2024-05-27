import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from './client.model';

@Entity()
class Profesional {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  area!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @OneToMany(() => Cliente, cliente => cliente.profesional)
  clientes!: Cliente[];
}

export default Profesional;

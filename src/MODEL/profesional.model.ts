import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Cliente } from './client.model';
import { Roletype } from "../TYPE/role.enum";

@Entity()
class Profesional {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: "enum", enum: Roletype, nullable:false})
  rol!: Roletype;

  @Column()
  name!: string;

  @Column()
  @Unique(['email'])
  email!: string;

  @Column()
  password!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @OneToMany(() => Cliente, cliente => cliente.profesional)
  clientes!: Cliente[];
}

export default Profesional;

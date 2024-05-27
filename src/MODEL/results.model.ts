import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cliente } from './client.model';

@Entity()
export class Resultado {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  descripcion!: string;

  @Column()
  pdfUrl!: string;

  @ManyToOne(() => Cliente, cliente => cliente.resultados)
  cliente!: Cliente;
}

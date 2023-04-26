import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({})
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'address', type: 'varchar' })
  address: string;
}

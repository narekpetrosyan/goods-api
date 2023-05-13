import { Purchase } from 'src/purchase/entities/purchase.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({})
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'address', type: 'varchar' })
  address: string;

  @OneToMany(() => Purchase, (purchase) => purchase.customer)
  purchases: Purchase[];
}

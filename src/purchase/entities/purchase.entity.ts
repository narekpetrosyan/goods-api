import { Customer } from 'src/customer/entities/customer.entity';
import { Good } from 'src/good/entities/good.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'date', type: 'datetime' })
  date: Date;

  @Column({ name: 'quantity', type: 'int' })
  quantity: number;

  @Column({
    name: 'price',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  price: string;

  @OneToMany(() => Good, (good) => good.purchase, { onDelete: 'SET NULL' })
  good: Good;

  @ManyToOne(() => Customer, (customer) => customer.purchases)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}

import { Good } from 'src/good/entities/good.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @ManyToOne(() => Good, (good) => good.id)
  @JoinColumn({ name: 'goodId' })
  good: Good;
}

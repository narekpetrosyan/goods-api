import { Purchase } from 'src/purchase/entities/purchase.entity';
import { Storage } from 'src/storage/entities/storage.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Good {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'description', type: 'varchar', length: 500 })
  description: string;

  @Column({ name: 'category', type: 'varchar', length: 50 })
  category: string;

  @Column({
    name: 'price',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  price: string;

  @Column({ name: 'brand', type: 'varchar', length: 50 })
  brand: string;

  @Column({ name: 'quantity', type: 'int', nullable: false })
  quantity: number;

  @ManyToOne(() => Storage, (storage) => storage.goods, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'storage_id' })
  storage: Storage;

  @ManyToOne(() => Purchase, (purchase) => purchase.good)
  @JoinColumn({ name: 'purchase_id' })
  purchase: Purchase;
}

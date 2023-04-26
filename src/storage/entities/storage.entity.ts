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
export class Storage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 50 })
  name: string;

  @Column({ name: 'address', type: 'varchar', length: 100 })
  address: string;

  @Column({ name: 'country', type: 'varchar', length: 50 })
  country: string;

  @Column({ name: 'state', type: 'varchar', length: 50 })
  state: string;

  @Column({ name: 'city', type: 'varchar', length: 50 })
  city: string;

  @Column({ name: 'phone', type: 'varchar', length: 20 })
  phone: string;

  @Column({
    name: 'capacity',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  capacity: string;

  @ManyToOne(() => Storage, (storage) => storage.id)
  @JoinColumn({ name: 'storageId' })
  storage: Storage;

  @OneToMany(() => Good, (good) => good.storage)
  goods: Good[];
}

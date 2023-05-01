import { BookingEntity } from 'src/booking/entity/booking.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'passenger' })
export class PassengerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name', length: 20, type: 'varchar' })
  first_name: string;

  @Column({ name: 'last_name', length: 20, type: 'varchar' })
  last_name: string;

  @Column({ name: 'passport_number', length: 20, type: 'varchar' })
  passport_number: string;

  @Column({ name: 'birthday', type: 'date' })
  birthday: Date;

  @Column({ name: 'age', type: 'numeric' })
  age: number;

  @Column({ name: 'num_of_times_booked', type: 'int', default: 0 })
  num_of_times_booked: number;

  @OneToMany(() => BookingEntity, (booking) => booking.passenger, {
    onDelete: 'SET NULL',
  })
  booking: BookingEntity;
}

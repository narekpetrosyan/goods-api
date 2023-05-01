import { FlightScheduleEntity } from 'src/flight_schedule/entity/flight_schedule.entity';
import { PassengerEntity } from 'src/passenger/entity/passenger.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'booking' })
export class BookingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'seat_number', length: 15, type: 'varchar' })
  seat_number: number;

  @Column({ name: 'date', type: 'date' })
  date: Date;

  @ManyToOne(() => PassengerEntity, (passenger) => passenger.booking, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'passenger_id' })
  passenger: PassengerEntity;

  @ManyToMany(() => FlightScheduleEntity, (schedule) => schedule.bookings)
  schedules: FlightScheduleEntity[];
}

import { BookingEntity } from 'src/booking/entity/booking.entity';
import { FlightEntity } from 'src/flight/entity/flight.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'flight_schedule' })
export class FlightScheduleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'starting_time', type: 'date' })
  starting_time: Date;

  @Column({ name: 'starting_date', type: 'date' })
  starting_date: Date;

  @Column({ name: 'stopping_time', type: 'date' })
  stopping_time: Date;

  @Column({ name: 'stopping_date', type: 'date' })
  stopping_date: Date;

  @ManyToMany(() => BookingEntity, (booking) => booking.schedules)
  @JoinTable()
  bookings: BookingEntity[];

  @OneToMany(() => FlightEntity, (flight) => flight.schedule)
  flight: FlightEntity;
}

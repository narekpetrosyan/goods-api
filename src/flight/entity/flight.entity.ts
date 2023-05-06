import { AirportEntity } from 'src/airport/entity/aitport.entity';
import { FlightScheduleEntity } from 'src/flight_schedule/entity/flight_schedule.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'flight' })
export class FlightEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'to' })
  to: string;

  @ManyToOne(() => FlightScheduleEntity, (schedule) => schedule.flight)
  @JoinColumn({ name: 'schedule_id' })
  schedule: FlightScheduleEntity;

  @ManyToOne(() => AirportEntity, (airport) => airport.flight, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'airport_id' })
  airport: AirportEntity;
}

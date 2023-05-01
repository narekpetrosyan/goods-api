import { AirportEntity } from 'src/airport/entity/aitport.entity';
import { FlightScheduleEntity } from 'src/flight_schedule/entity/flight_schedule.entity';
import {
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'flight' })
export class FlightEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => FlightScheduleEntity, (schedule) => schedule.flight)
  @JoinTable({ name: 'schedule_id' })
  schedule: FlightScheduleEntity;

  @ManyToOne(() => AirportEntity, (airport) => airport.flight, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'airport_id' })
  airport: AirportEntity;
}

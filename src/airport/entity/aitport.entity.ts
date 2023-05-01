import { FlightEntity } from 'src/flight/entity/flight.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'airport' })
export class AirportEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'description', type: 'varchar', length: 100 })
  description: string;

  @Column({ name: 'country', type: 'varchar', length: 100 })
  country: string;

  @OneToMany(() => FlightEntity, (flight) => flight.airport)
  flight: FlightEntity;
}

import { Module, forwardRef } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightEntity } from './entity/flight.entity';
import { AirportModule } from 'src/airport/airport.module';
import { FlightScheduleModule } from 'src/flight_schedule/flight_schedule.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FlightEntity]),
    AirportModule,
    forwardRef(() => FlightScheduleModule),
  ],
  providers: [FlightService],
  controllers: [FlightController],
  exports: [FlightService],
})
export class FlightModule {}

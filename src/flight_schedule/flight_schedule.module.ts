import { Module } from '@nestjs/common';
import { FlightScheduleController } from './flight_schedule.controller';
import { FlightScheduleService } from './flight_schedule.service';

@Module({
  controllers: [FlightScheduleController],
  providers: [FlightScheduleService]
})
export class FlightScheduleModule {}

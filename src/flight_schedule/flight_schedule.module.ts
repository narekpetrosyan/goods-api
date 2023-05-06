import { Module, forwardRef } from '@nestjs/common';
import { FlightScheduleController } from './flight_schedule.controller';
import { FlightScheduleService } from './flight_schedule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightScheduleEntity } from './entity/flight_schedule.entity';
import { FlightModule } from 'src/flight/flight.module';
import { BookingModule } from 'src/booking/booking.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FlightScheduleEntity]),
    forwardRef(() => FlightModule),
    forwardRef(() => BookingModule),
  ],
  controllers: [FlightScheduleController],
  providers: [FlightScheduleService],
  exports: [FlightScheduleService],
})
export class FlightScheduleModule {}

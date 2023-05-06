import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirportModule } from './airport/airport.module';
import { FlightModule } from './flight/flight.module';
import { FlightScheduleModule } from './flight_schedule/flight_schedule.module';
import { PassengerModule } from './passenger/passenger.module';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'goods',
      synchronize: true,
      entities: ['./**/*.entity.js'],
    }),
    AirportModule,
    FlightScheduleModule,
    FlightModule,
    PassengerModule,
    BookingModule,
  ],
})
export class AppModule {}

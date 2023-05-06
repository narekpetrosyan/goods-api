import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FlightScheduleEntity } from './entity/flight_schedule.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { FlightService } from 'src/flight/flight.service';
import { BookingService } from 'src/booking/booking.service';

@Injectable()
export class FlightScheduleService {
  constructor(
    @InjectRepository(FlightScheduleEntity)
    private flightScheduleEntity: Repository<FlightScheduleEntity>,

    @Inject(forwardRef(() => BookingService))
    private readonly bookingService: BookingService,
    @Inject(forwardRef(() => FlightService))
    private readonly flightService: FlightService,
  ) {}

  async getAll() {
    return await this.flightScheduleEntity.find({
      loadEagerRelations: true,
      relations: { flight: { airport: true, schedule: true }, bookings: true },
      take: 10,
    });
  }

  async seedFakeData() {
    const bookigns = await this.bookingService.getAll();
    const flights = await this.flightService.getAll();
    const creation = this.flightScheduleEntity.create({
      starting_date: faker.date.soon(),
      stopping_date: faker.date.future(),
      starting_time: faker.date.soon(),
      stopping_time: faker.date.future(),
      flight: flights[faker.datatype.number({ min: 0, max: 99 })],
      bookings: bookigns.slice(
        faker.datatype.number({ min: 0, max: 12 }),
        faker.datatype.number({ min: 13, max: 25 }),
      ),
    });
    return await this.flightScheduleEntity.save(creation);
  }
}

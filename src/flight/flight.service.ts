import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FlightEntity } from './entity/flight.entity';
import { Repository } from 'typeorm';
import { AirportService } from 'src/airport/airport.service';
import { FlightScheduleService } from 'src/flight_schedule/flight_schedule.service';
import { faker } from '@faker-js/faker';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(FlightEntity)
    private flightEntity: Repository<FlightEntity>,
    @Inject(forwardRef(() => FlightScheduleService))
    private flightScheduleService: FlightScheduleService,
    private airportService: AirportService,
  ) {}

  async getAll() {
    return await this.flightEntity.find({
      relations: ['airport', 'schedule'],
      take: 10,
      skip: 104,
    });
  }

  async seedFakeData() {
    const schedules = await this.flightScheduleService.getAll();
    const airports = await this.airportService.getAll();
    const creation = this.flightEntity.create({
      airport: airports[faker.datatype.number({ min: 0, max: 99 })],
      schedule: schedules[faker.datatype.number({ min: 0, max: 99 })],
    });
    return await this.flightEntity.save(creation);
  }
}

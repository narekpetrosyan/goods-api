import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingEntity } from './entity/booking.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { PassengerService } from 'src/passenger/passenger.service';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(BookingEntity)
    private bookingEntity: Repository<BookingEntity>,
    private passengerService: PassengerService,
  ) {}

  async getAll() {
    return await this.bookingEntity.find({
      relations: ['passenger'],
      take: 10,
    });
  }

  async seedFakeData() {
    const passengers = await this.passengerService.getAll();
    const creation = this.bookingEntity.create({
      date: faker.date.future(),
      seat_number: faker.datatype.number({ min: 1, max: 72 }),
      passenger: passengers[faker.datatype.number({ min: 0, max: 99 })],
    });
    return await this.bookingEntity.save(creation);
  }
}

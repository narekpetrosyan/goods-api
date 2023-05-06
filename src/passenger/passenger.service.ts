import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PassengerEntity } from './entity/passenger.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';

@Injectable()
export class PassengerService {
  constructor(
    @InjectRepository(PassengerEntity)
    private passengerEntity: Repository<PassengerEntity>,
  ) {}

  async getAll() {
    return await this.passengerEntity.find({
      take: 20,
    });
  }

  async seedFakeData() {
    const creation = this.passengerEntity.create({
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      age: faker.datatype.number({ min: 18, max: 62 }),
      birthday: faker.date.birthdate(),
      passport_number:
        faker.random.alpha({ count: 2 }) + faker.phone.number('#######'),
      num_of_times_booked: faker.datatype.number(),
    });
    return await this.passengerEntity.save(creation);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AirportEntity } from './entity/aitport.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class AirportService {
  constructor(
    @InjectRepository(AirportEntity)
    private airportRepository: Repository<AirportEntity>,
  ) {}

  async getAll() {
    return await this.airportRepository.find();
  }

  async seedFakeData() {
    const creation = this.airportRepository.create({
      country: faker.address.country(),
      description: faker.random.words(5),
    });
    return await this.airportRepository.save(creation);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Storage } from './entities/storage.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';

@Injectable()
export class StorageService {
  constructor(
    @InjectRepository(Storage)
    private storageRepository: Repository<Storage>,
  ) {}

  async getAll() {
    return await this.storageRepository.find({ relations: ['goods'] });
  }

  async seedFakeData() {
    const creation = this.storageRepository.create({
      name: faker.name.fullName(),
      country: faker.address.country(),
      state: faker.address.state(),
      city: faker.address.city(),
      address: `${faker.address.city()}, ${faker.address.street()}`,
      phone: faker.phone.number('501-###-###'),
      capacity: faker.random.numeric(),
    });
    return await this.storageRepository.save(creation);
  }
}

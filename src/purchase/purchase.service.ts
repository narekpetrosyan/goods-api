import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Purchase } from './entities/purchase.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';

@Injectable()
export class PurchaseService {
  constructor(
    @InjectRepository(Purchase)
    private storageRepository: Repository<Purchase>,
  ) {}

  async getAll() {
    return await this.storageRepository.find({ relations: ['good'] });
  }

  async seedFakeData() {
    const creation = this.storageRepository.create({
      price: faker.commerce.price(10, 100, 1),
      date: faker.datatype.datetime(),
      quantity: faker.datatype.number({ min: 1, max: 10 }),
    });
    return await this.storageRepository.save(creation);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async getAll() {
    return await this.customerRepository.find();
  }

  async seedFakeData() {
    const creation = this.customerRepository.create({
      name: faker.name.fullName(),
      address: `${faker.address.city()}, ${faker.address.street()}`,
    });
    return await this.customerRepository.save(creation);
  }
}

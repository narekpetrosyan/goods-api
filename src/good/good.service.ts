import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Good } from './entities/good.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { StorageService } from 'src/storage/storage.service';
import { PurchaseService } from 'src/purchase/purchase.service';

@Injectable()
export class GoodService {
  constructor(
    @InjectRepository(Good)
    private goodRepository: Repository<Good>,
    private storageService: StorageService,
    private purchaseService: PurchaseService,
  ) {}

  async getAll() {
    return await this.goodRepository.find({ relations: ['storage'] });
  }

  async seedFakeData() {
    const foundStorage = await this.storageService.getAll();
    const purchases = await this.purchaseService.getAll();
    const creation = this.goodRepository.create({
      name: faker.random.word(),
      price: faker.random.numeric(),
      brand: faker.random.word(),
      category: faker.random.word(),
      description: faker.random.words(10),
      quantity: faker.datatype.number({ min: 1000 }),
      storage:
        foundStorage[
          faker.datatype.number({
            min: 0,
            max: 1,
          })
        ],
      purchase:
        purchases[
          faker.datatype.number({
            min: 0,
            max: 199,
          })
        ],
    });
    return await this.goodRepository.save(creation);
  }
}

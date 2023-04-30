import { Controller, Get, Post } from '@nestjs/common';
import { StorageService } from './storage.service';

@Controller('storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @Get('/')
  async getAll() {
    return await this.storageService.getAll();
  }

  @Post('/seed-fake-data')
  async seedFakeData() {
    try {
      for (let i = 0; i < 2; i++) {
        await this.storageService.seedFakeData();
      }
      return {
        success: true,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        error: error,
      };
    }
  }
}

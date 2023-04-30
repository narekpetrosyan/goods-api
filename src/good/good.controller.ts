import { Controller, Get, Post } from '@nestjs/common';
import { GoodService } from './good.service';

@Controller('good')
export class GoodController {
  constructor(private readonly goodService: GoodService) {}

  @Get('/')
  async getAll() {
    return await this.goodService.getAll();
  }

  @Post('/seed-fake-data')
  async seedFakeData() {
    try {
      for (let i = 0; i < 100; i++) {
        await this.goodService.seedFakeData();
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

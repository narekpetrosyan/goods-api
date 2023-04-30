import { Controller, Get, Post } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get('/')
  async getAll() {
    return await this.purchaseService.getAll();
  }

  @Post('/seed-fake-data')
  async seedFakeData() {
    try {
      for (let i = 0; i < 200; i++) {
        await this.purchaseService.seedFakeData();
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

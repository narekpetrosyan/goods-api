import { Controller, Get, Post } from '@nestjs/common';
import { PassengerService } from './passenger.service';

@Controller('passenger')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @Get('/')
  async getAll() {
    return await this.passengerService.getAll();
  }

  @Post('/seed-fake-data')
  async seedFakeData() {
    try {
      for (let i = 0; i < 100; i++) {
        await this.passengerService.seedFakeData();
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

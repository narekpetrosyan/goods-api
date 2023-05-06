import { Controller, Get, Post } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get('/')
  async getAll() {
    return await this.bookingService.getAll();
  }

  @Post('/seed-fake-data')
  async seedFakeData() {
    try {
      for (let i = 0; i < 2000; i++) {
        await this.bookingService.seedFakeData();
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

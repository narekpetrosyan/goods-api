import { Controller, Get, Post } from '@nestjs/common';
import { AirportService } from './airport.service';

@Controller('airport')
export class AirportController {
  constructor(private readonly airportService: AirportService) {}

  @Get('/')
  async getAll() {
    return await this.airportService.getAll();
  }

  @Post('/seed-fake-data')
  async seedFakeData() {
    try {
      for (let i = 0; i < 100; i++) {
        await this.airportService.seedFakeData();
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

import { Controller, Get, Post } from '@nestjs/common';
import { FlightScheduleService } from './flight_schedule.service';

@Controller('flight-schedule')
export class FlightScheduleController {
  constructor(private readonly flightScheduleService: FlightScheduleService) {}

  @Get('/')
  async getAll() {
    return await this.flightScheduleService.getAll();
  }

  @Post('/seed-fake-data')
  async seedFakeData() {
    try {
      for (let i = 0; i < 100; i++) {
        await this.flightScheduleService.seedFakeData();
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

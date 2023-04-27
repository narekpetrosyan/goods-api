import { Controller, Get } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('/')
  async getAll() {
    console.log(123);

    return await this.customerService.getAll();
  }
}

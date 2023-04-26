import { Controller } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  async getAll() {
    console.log(123);

    return await this.customerService.getAll();
  }
}

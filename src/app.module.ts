import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { CustomerModule } from './customer/customer.module';
import { PurchaseModule } from './purchase/purchase.module';
import { GoodModule } from './good/good.module';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    CustomerModule,
    PurchaseModule,
    GoodModule,
    StorageModule,
  ],
})
export class AppModule {}

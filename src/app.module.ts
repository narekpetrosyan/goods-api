import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerModule } from './customer/customer.module';
import { PurchaseModule } from './purchase/purchase.module';
import { GoodModule } from './good/good.module';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'goods',
      synchronize: true,
      entities: ['./**/*.entity.js'],
    }),
    CustomerModule,
    PurchaseModule,
    GoodModule,
    StorageModule,
  ],
})
export class AppModule {}

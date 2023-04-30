import { Module } from '@nestjs/common';
import { GoodService } from './good.service';
import { GoodController } from './good.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Good } from './entities/good.entity';
import { StorageModule } from 'src/storage/storage.module';
import { PurchaseModule } from 'src/purchase/purchase.module';

@Module({
  imports: [TypeOrmModule.forFeature([Good]), StorageModule, PurchaseModule],
  providers: [GoodService],
  controllers: [GoodController],
  exports: [GoodService],
})
export class GoodModule {}

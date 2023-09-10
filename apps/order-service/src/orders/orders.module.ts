import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { DbModule } from '../db/db.module';
import { OrdersService } from './services/order/orders.service';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [DbModule, ProductsModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}

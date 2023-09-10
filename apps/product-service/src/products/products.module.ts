import { Module } from '@nestjs/common';
import { ProductsService } from './services/product/products.service';
import { ProductsController } from './products.controller';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}

import { Module } from '@nestjs/common';
import { ProductsService } from './services/product.service';

@Module({
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '../config';
import { serviceProviders } from './services';
import { ProductsModule } from '../products/products.module';
@Module({
  imports: [ConfigModule, ProductsModule],
  providers: [...serviceProviders],
})
export class AppModule {}

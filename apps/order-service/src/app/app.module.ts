import { Module } from '@nestjs/common';
import { serviceProviders } from './services';
import { ConfigModule } from '../config';
import { OrdersModule } from '../orders/orders.module';

@Module({
  imports: [ConfigModule, OrdersModule],
  providers: [...serviceProviders],
})
export class AppModule {}

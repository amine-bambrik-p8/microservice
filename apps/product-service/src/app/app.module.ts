import { Module } from '@nestjs/common';
import { ConfigModule } from '../config';
import { serviceProviders } from './services';

@Module({
  imports: [ConfigModule],
  providers: [...serviceProviders],
})
export class AppModule {}

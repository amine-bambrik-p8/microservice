import { Module } from '@nestjs/common';
import { serviceProviders } from './services';

@Module({
  imports: [],
  providers: [...serviceProviders],
})
export class AppModule {}

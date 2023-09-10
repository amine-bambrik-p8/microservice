import { Module } from '@nestjs/common';
import { IConfigService, serviceProviders } from './services';

@Module({
  providers: [...serviceProviders],
  exports: [IConfigService],
})
export class ConfigModule {}

import { Module } from '@nestjs/common';
import { IEncryptionService, serviceProviders } from './services';

@Module({
  providers: [...serviceProviders],
  exports: [IEncryptionService],
})
export class EncryptionModule {}

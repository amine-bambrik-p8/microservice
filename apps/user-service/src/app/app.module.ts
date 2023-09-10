import { Module } from '@nestjs/common';
import { ConfigModule } from '../config';
import { serviceProviders } from './services';
import { UsersModule } from '../users/users.module';
@Module({
  imports: [ConfigModule, UsersModule],
  providers: [...serviceProviders],
})
export class AppModule {}

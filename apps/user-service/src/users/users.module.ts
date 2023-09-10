import { Module } from '@nestjs/common';
import { UsersService } from './services/user/users.service';
import { UsersController } from './users.controller';
import { DbModule } from '../db/db.module';
import { PasswordService } from './services/password/password.service';
import { EncryptionModule } from '../encryption';

@Module({
  imports: [DbModule, EncryptionModule],
  controllers: [UsersController],
  providers: [UsersService, PasswordService],
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { repositoryProviders } from './repository';
import { IUsersRepository } from './repository/user/users.repository.interface';
import { UserSchema } from './schemas/user/user.schema';
import { schemas } from './schemas';
import { DbConfigService } from './services/db-config/db-config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DbConfigService.getDbHost(),
      port: DbConfigService.getDbPort(),
      username: DbConfigService.getDbUsername(),
      password: DbConfigService.getDbPassword(),
      database: DbConfigService.getDbName(),
      entities: [...schemas],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserSchema]),
  ],
  providers: [...repositoryProviders],
  exports: [IUsersRepository],
})
export class DbModule {}

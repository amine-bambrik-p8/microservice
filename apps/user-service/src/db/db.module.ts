import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { repositoryProviders } from './repository';
import { IUsersRepository } from './repository/user/users.repository.interface';
import { UserSchema } from './schemas/user/user.schema';
import { schemas } from './schemas';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'mytopsecretpassword',
      database: 'postgres',
      entities: [...schemas],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserSchema]),
  ],
  providers: [...repositoryProviders],
  exports: [IUsersRepository],
})
export class DbModule {}

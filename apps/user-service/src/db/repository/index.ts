import { IUsersRepository } from './user/users.repository.interface';
import { UsersTypeOrmRepository } from './user/users.typeorm.repository';

export { IUsersRepository } from './user/users.repository.interface';
export const repositoryProviders = [
  {
    provide: IUsersRepository,
    useClass: UsersTypeOrmRepository,
  },
];

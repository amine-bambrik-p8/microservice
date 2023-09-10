import { User } from '../../../users/models/user.model';

export abstract class IUsersRepository {
  abstract create(user: User): Promise<User>;
  abstract update(id: number, user: Partial<User>): Promise<void>;
  abstract remove(id: number): Promise<void>;
  abstract findAll(): Promise<User[]>;
  abstract findOne(id: number): Promise<User>;
}

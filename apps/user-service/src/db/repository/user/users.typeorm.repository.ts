import { Repository } from 'typeorm';
import { UserSchema } from '../../schemas/user/user.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { User } from '../../../users/models/user.model';
import { IUsersRepository } from './users.repository.interface';
@Injectable()
export class UsersTypeOrmRepository implements IUsersRepository {
  constructor(
    @InjectRepository(UserSchema)
    private readonly userRepository: Repository<UserSchema>
  ) {}
  async create(user: User) {
    const newUser = new UserSchema({
      ...user.getData(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return new User(await this.userRepository.save(newUser));
  }
  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users.map((user) => new User(user));
  }
  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      return undefined;
    }
    return new User(user);
  }
  async update(id: number, user: User) {
    await this.userRepository.update(id, {
      ...user.getData(),
      updatedAt: new Date(),
    });
  }
  async remove(id: number) {
    await this.userRepository.delete(id);
  }
}

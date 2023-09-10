import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { IUsersRepository } from '../../../db';
import { User } from '../../models/user.model';
import { PasswordService } from '../password/password.service';
import { IGetUserResponseModel } from '../../response-models/get-user.response-model.interface';
import { IGetUsersResponseModel } from '../../response-models/get-users.response-model.interface';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: IUsersRepository,
    private readonly passwordService: PasswordService
  ) {}
  async create(createUserDto: CreateUserDto) {
    const password = await this.passwordService.hashPassword(
      createUserDto.password
    );
    const newUser = new User({
      ...createUserDto,
      password,
    });
    return await this.usersRepository.create(newUser);
  }

  async findAll(): Promise<IGetUsersResponseModel> {
    const users = await this.usersRepository.findAll();

    return users.map((user) => ({
      username: user.username,
      email: user.email,
      id: user.id,
    }));
  }

  async findOne(id: number): Promise<IGetUserResponseModel> {
    const user = await this.usersRepository.findOne(id);
    return {
      username: user.username,
      email: user.email,
      id: user.id,
    };
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new Error('User does not exist');
    }
    user.edit(updateUserDto);
    return await this.usersRepository.update(id, user);
  }

  async remove(id: number) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new Error('User does not exist');
    }
    return await this.usersRepository.remove(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './services/user/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IGetUsersResponseModel } from './response-models/get-users.response-model.interface';
import { IGetUserResponseModel } from './response-models/get-user.response-model.interface';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<IGetUsersResponseModel> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IGetUserResponseModel> {
    const user = await this.usersService.findOne(+id);
    if (!user) {
      throw new NotFoundException('User does not exist');
    }
    return user;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      await this.usersService.update(+id, updateUserDto);
    } catch (error) {
      throw new NotFoundException('User does not exist');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.usersService.remove(+id);
    } catch (error) {
      throw new NotFoundException('User does not exist');
    }
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS') private UsersClien: ClientProxy) {}

  create(createUserDto: any) {
    return this.UsersClien.send('createUser', createUserDto);
  }

  findAll() {
    return this.UsersClien.send('findAllUser', {});
  }

  findOne(id: string) {
    return this.UsersClien.send('findOneUser', id);
  }

  update(id: string, updateUserDto: any) {
    return this.UsersClien.send('updateUser', { id, ...updateUserDto });
  }

  remove(id: string) {
    return this.UsersClien.send('deleteUser', id);
  }
}

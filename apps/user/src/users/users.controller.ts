import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @MessagePattern('findAllUser')
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern('findOneUser')
  findOne(@Payload() id: string) {
    return this.userService.findOne(id);
  }

  @MessagePattern('createUser')
  create(@Payload() data: any) {
    return this.userService.create(data);
  }

  @MessagePattern('updateUser')
  update(@Payload() data: any) {
    return this.userService.Update(data.id, data);
  }
  @MessagePattern('deleteUser')
  delete(@Payload() id: string) {
    return this.userService.Delete(id);
  }
}

